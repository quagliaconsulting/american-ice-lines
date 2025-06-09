import { NextRequest, NextResponse } from 'next/server';
import { createHubspotContact, createTicket } from '../../../lib/hubspot';
import { z } from 'zod';

const fundContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, 'Inquiry type is required'),
  revenue: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const result = fundContactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, company, phone, inquiryType, revenue, industry, message } = result.data;
    
    // Split name into first and last name for HubSpot
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Create or update contact in HubSpot
    let contactResponse;
    try {
      contactResponse = await createHubspotContact(email, firstName, lastName, phone, company);
    } catch (error: any) {
      console.error('Error creating contact:', error);
      return NextResponse.json(
        { error: 'Failed to create contact', details: error.message },
        { status: 500 }
      );
    }
    
    // Create a ticket in HubSpot with fund-specific subject
    try {
      if (contactResponse?.id) {
        const subject = `Fund Inquiry: ${inquiryType} - ${company || name}`;
        const ticketMessage = `
Inquiry Type: ${inquiryType}
Company: ${company || 'Not provided'}
Revenue Range: ${revenue || 'Not provided'}
Industry: ${industry || 'Not provided'}

Message:
${message}
        `.trim();
        
        await createTicket(
          subject,
          ticketMessage,
          contactResponse.id,
          'HIGH', // Fund inquiries are high priority
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
      message: 'Fund contact form submitted successfully',
    });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: error.message },
      { status: 500 }
    );
  }
}