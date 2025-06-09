import { NextRequest, NextResponse } from 'next/server';
import { createHubspotContact, createTicket } from '../../../lib/hubspot';
import { z } from 'zod';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { firstName, lastName, email, phone, subject, message } = result.data;
    
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
    
    // Create a ticket in HubSpot
    try {
      if (contactResponse?.id) {
        await createTicket(
          subject,
          message,
          contactResponse.id,
          'MEDIUM',
          'INQUIRY'
        );
      } else {
        throw new Error('Contact ID not found');
      }
    } catch (error: any) {
      console.error('Error creating ticket:', error);
      return NextResponse.json(
        { error: 'Failed to create ticket', details: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: error.message },
      { status: 500 }
    );
  }
}
