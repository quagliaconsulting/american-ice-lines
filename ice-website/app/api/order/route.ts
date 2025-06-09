import { NextRequest, NextResponse } from 'next/server';
import { createHubspotContact, createHubspotDeal } from '../../../lib/hubspot';
import { z } from 'zod';

const orderFormSchema = z.object({
  // Customer information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  
  // Address information
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(5, 'Valid ZIP code is required'),
  
  // Delivery information
  deliveryDate: z.string().min(1, 'Delivery date is required'),
  deliveryTime: z.string().optional(),
  specialInstructions: z.string().optional(),
  
  // Order details
  orderItems: z.array(
    z.object({
      productId: z.string(),
      productName: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().positive(),
      option: z.string().optional(),
    })
  ).min(1, 'At least one product is required'),
  
  // Subscription
  isSubscription: z.boolean().default(false),
  
  // Totals
  subtotal: z.number().positive(),
  deliveryFee: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  total: z.number().positive(),
  
  // Consent
  termsConsent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const result = orderFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { 
      firstName, lastName, email, phone, 
      orderItems, total, isSubscription 
    } = result.data;
    
    // Create or update contact in HubSpot
    let contactResponse;
    try {
      contactResponse = await createHubspotContact(email, firstName, lastName, phone);
    } catch (error: any) {
      console.error('Error creating contact:', error);
      return NextResponse.json(
        { error: 'Failed to create contact', details: error.message },
        { status: 500 }
      );
    }
    
    // Create a deal in HubSpot
    try {
      if (contactResponse?.id) {
        const dealName = `${firstName} ${lastName} - ${isSubscription ? 'Subscription' : 'One-time'} Order`;
        await createHubspotDeal(
          contactResponse.id,
          dealName,
          total,
          'residential', // Assuming residential, could be determined by order value or a form field
          'qualifiedtobuy' // Deal stage for a new order
        );
      } else {
        throw new Error('Contact ID not found');
      }
    } catch (error: any) {
      console.error('Error creating deal:', error);
      return NextResponse.json(
        { error: 'Failed to create order in CRM', details: error.message },
        { status: 500 }
      );
    }
    
    // Here you would also handle payment processing, inventory management, etc.
    
    return NextResponse.json({
      success: true,
      message: 'Order submitted successfully',
      orderNumber: `AIL-${Date.now().toString().substring(5)}`, // Generate a simple order number
    });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: error.message },
      { status: 500 }
    );
  }
}
