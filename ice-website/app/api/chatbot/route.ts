import { NextRequest, NextResponse } from 'next/server';
import { createTicket, createHubspotContact } from '../../../lib/hubspot';

// Simple FAQ database for the chatbot
const faqData = [
  {
    keywords: ['delivery', 'shipping', 'ship', 'arrive', 'time', 'long'],
    question: 'How long does delivery take?',
    answer: 'We typically deliver within 24-48 hours for standard orders within our service area. For custom or bulk orders, please allow 3-5 business days. You can specify a delivery date and time during checkout.'
  },
  {
    keywords: ['price', 'cost', 'pricing', 'expensive', 'cheap', 'subscription'],
    question: 'How much does your ice cost?',
    answer: 'Our prices vary by product and quantity. Crystal Cubes start at $19.99 for 24 cubes, Sphere Ice starts at $24.99 for 12 spheres, and Collins Ice starts at $22.99 for 12 sticks. We also offer subscription plans that save you 10%.'
  },
  {
    keywords: ['quality', 'clear', 'clarity', 'cloudy', 'pure', 'clean'],
    question: 'What makes your ice so clear?',
    answer: 'We use a specialized directional freezing technique that forces air bubbles and impurities out of the ice as it forms. Combined with our triple-filtered water, this creates perfectly clear ice that melts slower and doesn\'t affect the taste of your drink.'
  },
  {
    keywords: ['custom', 'logo', 'special', 'shape', 'personalized', 'brand'],
    question: 'Can you make custom ice with our logo?',
    answer: 'Yes! We specialize in custom ice solutions including logo embedding. These are perfect for corporate events, weddings, and brand promotions. Please contact our team for a custom quote.'
  },
  {
    keywords: ['business', 'wholesale', 'restaurant', 'bar', 'hotel', 'bulk', 'commercial'],
    question: 'Do you offer business or wholesale solutions?',
    answer: 'Absolutely. We have dedicated business plans for restaurants, bars, hotels, and event venues. Our business solutions include regular scheduled deliveries, volume discounts, and custom branding options.'
  },
  {
    keywords: ['melt', 'melting', 'last', 'duration', 'long'],
    question: 'How long does your ice last?',
    answer: 'Our premium ice lasts 30-50% longer than regular ice due to its density and purity. Depending on the shape and size, our ice can last 2-3 hours in a room temperature drink before completely melting.'
  },
  {
    keywords: ['storage', 'store', 'keep', 'container', 'freezer'],
    question: 'How should I store the ice?',
    answer: 'Our ice comes in insulated containers that keep it frozen for up to 24 hours. For longer storage, transfer to your freezer in the provided sealed containers to prevent absorption of freezer odors.'
  },
  {
    keywords: ['area', 'location', 'deliver', 'where', 'ship to', 'service'],
    question: 'Where do you deliver?',
    answer: 'We currently deliver to most major metropolitan areas in the United States. You can check if your location is within our delivery area by entering your ZIP code during the checkout process.'
  },
  {
    keywords: ['events', 'wedding', 'party', 'celebration', 'special occasion'],
    question: 'Can you provide ice for events?',
    answer: 'Yes! We offer special packages for weddings, corporate events, and parties. We can create custom ice sculptures, branded ice, and ensure you have the perfect amount of premium ice for your event.'
  },
  {
    keywords: ['contact', 'speak', 'human', 'representative', 'help', 'support', 'service'],
    question: 'How can I speak to customer service?',
    answer: 'You can reach our customer service team at (800) 555-1234 during business hours (Monday-Friday 8am-6pm, Saturday 9am-4pm), or email us at info@americanicelines.com. You can also use our contact form on the website.'
  }
];

export async function POST(request: NextRequest) {
  try {
    const { message, name, email } = await request.json();
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    
    // Simple NLP to find the best matching FAQ
    const userMessageLower = message.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;
    
    // Search for keywords in the user's message
    for (const faq of faqData) {
      let score = 0;
      for (const keyword of faq.keywords) {
        if (userMessageLower.includes(keyword.toLowerCase())) {
          score += 1;
        }
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }
    
    // If a good match was found, return the answer
    if (bestMatch && bestScore > 0) {
      return NextResponse.json({ reply: bestMatch.answer });
    }
    
    // If no good match found, create a ticket if user info is provided
    if (email && name) {
      try {
        // Create contact in HubSpot
        const firstName = name.split(' ')[0];
        const lastName = name.split(' ').slice(1).join(' ') || ''; 
        const contactResponse = await createHubspotContact(email, firstName, lastName);
        
        if (contactResponse?.id) {
          // Create support ticket
          await createTicket(
            'Chatbot Query',
            `User message: ${message}`,
            contactResponse.id,
            'MEDIUM',
            'INQUIRY'
          );
        }
      } catch (error) {
        console.error('Error creating ticket from chatbot:', error);
      }
    }
    
    // Default fallback response
    return NextResponse.json({
      reply: "I'm not sure I understand your question. Would you like to speak with a member of our customer service team? You can reach us at (800) 555-1234 or use our contact form."
    });
    
  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your message' },
      { status: 500 }
    );
  }
}
