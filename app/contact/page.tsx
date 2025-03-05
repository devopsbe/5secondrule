import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from './contact-form';
import Link from 'next/link';
import ScrollToContactButton from './scroll-button';

export const metadata = {
  title: 'Contact Us | 5SecondRule',
  description: 'Get in touch with the 5SecondRule team for questions, collaborations, or feedback',
};

export default function ContactPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-bubblegum-pink text-white">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Questions, feedback, or collaboration ideas? We'd love to hear from you!
            </p>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-20 text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" />
          </svg>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-display text-deep-purple mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <ContactForm />
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display text-deep-purple mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Have a question about a recipe? Want to collaborate with us? Here's how to reach the 5SecondRule team.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-bubblegum-pink/10 p-3 rounded-full text-bubblegum-pink mr-4">
                        <MapPin />
                      </div>
                      <div>
                        <h3 className="font-semibold">Our Location</h3>
                        <p className="text-gray-600">123 Kitchen Street, Foodville, CA 94123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-lime-green/10 p-3 rounded-full text-lime-green mr-4">
                        <Phone />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone Number</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-bright-yellow/10 p-3 rounded-full text-deep-purple mr-4">
                        <Mail />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Address</h3>
                        <p className="text-gray-600">hello@5secondrule.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-deep-purple/10 p-3 rounded-full text-deep-purple mr-4">
                        <Clock />
                      </div>
                      <div>
                        <h3 className="font-semibold">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="mt-10 p-6 bg-bubblegum-pink/10 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="mr-3 text-bubblegum-pink" />
                    <h3 className="font-semibold text-lg">Response Time</h3>
                  </div>
                  <p>
                    We aim to respond to all inquiries within 24-48 hours during business days. 
                    For urgent matters, please contact us by phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-deep-purple mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to our most commonly asked questions. If you can't find what you're looking for, please reach out to us.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-xl mb-3 text-deep-purple">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-6">
                Still have questions? We're here to help!
              </p>
              <ScrollToContactButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// FAQ data
const faqs = [
  {
    question: "Can I submit my own recipe?",
    answer: "Absolutely! We love featuring community recipes. Send us your quick and delicious creations through our contact form, and our team will review them for potential publication."
  },
  {
    question: "Do you offer cooking classes?",
    answer: "Yes, we host virtual cooking workshops twice a month. Join our newsletter to get notified about upcoming classes and special events."
  },
  {
    question: "How can I collaborate with 5SecondRule?",
    answer: "We're always open to collaborations with brands, chefs, and content creators who share our vision. Reach out through our contact form with your proposal."
  },
  {
    question: "Are your recipes suitable for beginners?",
    answer: "Definitely! Our recipes are designed to be accessible for cooks of all skill levels, with clear instructions and simple techniques."
  },
  {
    question: "Can I repost your recipes on my blog?",
    answer: "We appreciate your interest, but our content is protected by copyright. Please contact us for permission and proper attribution guidelines."
  },
  {
    question: "How do I report a problem with a recipe?",
    answer: "If you encounter any issues with our recipes, please let us know through the contact form. We value your feedback and continuously work to improve our content."
  }
];

