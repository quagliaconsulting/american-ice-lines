// Optional HubSpot integration
let hubspotClient: any = null;

// Only initialize if API key is available
try {
  if (process.env.HUBSPOT_API_KEY) {
    const { Client } = require('@hubspot/api-client');
    hubspotClient = new Client({
      accessToken: process.env.HUBSPOT_API_KEY,
    });
  }
} catch (error) {
  console.warn('HubSpot client initialization failed:', error);
  // Continue without HubSpot functionality
}

export async function createHubspotContact(
  email: string,
  firstName: string, 
  lastName: string,
  phone?: string,
  company?: string
) {
  // Mock implementation when HubSpot is not available
  if (!hubspotClient) {
    console.log('Mock HubSpot contact creation:', { email, firstName, lastName, phone, company });
    return { id: 'mock-contact-id-' + Date.now() };
  }

  try {
    const properties = {
      email,
      firstname: firstName,
      lastname: lastName,
      phone: phone || '',
      company: company || '',
    };

    const contactObj = {
      properties,
    };

    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    return apiResponse;
  } catch (error) {
    console.error('Error creating contact in HubSpot:', error);
    // Return mock data on error
    return { id: 'mock-contact-id-' + Date.now() };
  }
}

export async function createHubspotDeal(
  contactId: string,
  dealName: string,
  amount: number,
  dealType: 'residential' | 'business',
  dealStage: string = 'appointment_scheduled' // Default starting stage
) {
  // Mock implementation when HubSpot is not available
  if (!hubspotClient) {
    console.log('Mock HubSpot deal creation:', { contactId, dealName, amount, dealType, dealStage });
    return { id: 'mock-deal-id-' + Date.now() };
  }

  try {
    const properties = {
      dealname: dealName,
      amount: amount.toString(),
      pipeline: 'default',
      dealstage: dealStage,
      deal_type: dealType,
    };

    const dealObj = {
      properties,
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: 3, // Contact to deal association
            },
          ],
        },
      ],
    };

    const apiResponse = await hubspotClient.crm.deals.basicApi.create(dealObj);
    return apiResponse;
  } catch (error) {
    console.error('Error creating deal in HubSpot:', error);
    // Return mock data on error
    return { id: 'mock-deal-id-' + Date.now() };
  }
}

export async function createTicket(
  subject: string,
  content: string,
  contactId: string,
  priority: 'HIGH' | 'MEDIUM' | 'LOW' = 'MEDIUM',
  ticketType: 'SUPPORT' | 'INQUIRY' | 'COMPLAINT' = 'INQUIRY'
) {
  // Mock implementation when HubSpot is not available
  if (!hubspotClient) {
    console.log('Mock HubSpot ticket creation:', { subject, content, contactId, priority, ticketType });
    return { id: 'mock-ticket-id-' + Date.now() };
  }

  try {
    const properties = {
      subject,
      content,
      hs_pipeline: 'support',
      hs_pipeline_stage: 'new',
      hs_ticket_priority: priority,
      hs_ticket_category: ticketType,
    };

    const ticketObj = {
      properties,
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: 16, // Contact to ticket association
            },
          ],
        },
      ],
    };

    const apiResponse = await hubspotClient.crm.tickets.basicApi.create(ticketObj);
    return apiResponse;
  } catch (error) {
    console.error('Error creating ticket in HubSpot:', error);
    // Return mock data on error
    return { id: 'mock-ticket-id-' + Date.now() };
  }
}