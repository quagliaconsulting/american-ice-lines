"use client";

import { useState, useRef, useEffect } from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Predefined responses for demo purposes
const demoResponses: Record<string, string> = {
  'hello': 'Hello! How can I help you with your ice needs today?',
  'hi': 'Hi there! Welcome to American Ice Lines. How can I assist you?',
  'pricing': 'Our prices vary by product. Crystal Cubes start at $19.99 for 24 cubes, Sphere Ice starts at $24.99 for 12 spheres, and Collins Ice starts at $22.99 for 12 sticks.',
  'delivery': 'We typically deliver within 24-48 hours for standard orders within our service area. For custom or bulk orders, please allow 3-5 business days.',
  'clear ice': 'Our ice is crystal clear due to our special directional freezing process that removes impurities and air bubbles during formation.',
  'business': 'We offer special business packages for restaurants, bars, hotels, and event venues. Would you like to know more about our business solutions?',
  'custom': 'Yes, we can create custom ice shapes and even embed logos for special events and branding. Please contact our team for more details.',
  'help': 'I can help with information about our products, pricing, delivery, or business services. What would you like to know?',
  'products': 'We offer Crystal Cubes, Sphere Ice, Collins Ice, and Custom Ice products. All are available for both residential and business customers.',
  'default': 'Thank you for your message. For specific questions, you can reach our customer service at (800) 555-1234 or use our contact form.'
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          content: 'Welcome to American Ice Lines! How can I help you today?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Demo response logic without API call
    setTimeout(() => {
      const userText = inputValue.toLowerCase();
      let responseText = demoResponses.default;
      
      // Find matching keywords
      for (const [keyword, response] of Object.entries(demoResponses)) {
        if (userText.includes(keyword)) {
          responseText = response;
          break;
        }
      }

      // Add bot response
      const botMessage: Message = {
        id: Date.now().toString() + '-bot',
        content: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <>
      {/* Chat icon button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 bg-deep-blue text-white rounded-full p-3 shadow-lg hover:bg-blue-800 transition-colors z-50"
        aria-label="Open chat support"
      >
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col border border-gray-200">
          {/* Chat header */}
          <div className="bg-deep-blue text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Ice Expert</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-deep-blue text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-deep-blue text-white rounded-r-md px-3 py-2 hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading || inputValue.trim() === ''}
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}