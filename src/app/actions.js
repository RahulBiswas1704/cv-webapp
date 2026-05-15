'use server'

import { saveMessage } from '@/lib/db';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    await saveMessage(name, email, message);
    return { success: true };
  } catch (error) {
    console.error('Failed to save message:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
