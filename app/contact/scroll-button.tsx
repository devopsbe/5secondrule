'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function ScrollToContactButton() {
  return (
    <Button 
      size="lg" 
      variant="default"
      onClick={() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Contact Us
    </Button>
  );
} 