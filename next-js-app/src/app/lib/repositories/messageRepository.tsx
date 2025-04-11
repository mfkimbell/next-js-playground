import { Message } from '@/app/types';

import { toast } from 'react-toastify';

export async function GetMessages(conversationId: string | null) {
  if (!conversationId) {
    toast.error('Conversation ID is missing.');

    return [];
  }
  try {
    const url = `/api/messages?conversationId=${conversationId}`;
    console.log('GetMessages url', url);
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`HTTP error with status: ${res.status}`);
    } else {
      toast.success('Messages pulled successfully');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    toast.error('api call failed for GetMessages.');

    console.error('Failed fetching messages');
    return null;
  }
}

export async function PostMessage(message: Message) {
  try {
    const res = await fetch('api/message', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    toast.success('message sent');
  } catch (err) {
    console.error('messageRepository failed to PostMessage');
  }
}
