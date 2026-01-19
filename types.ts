
// Fix: Import React to resolve React.ReactNode namespace error in a .ts file
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}