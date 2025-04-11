import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/app/types';
import { toast } from 'react-toastify';
enum direction {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}
// Your mock messages (or a DB call)
const mockMessages: Message[] = [
  {
    conversationId: '1',
    messageId: '1-1',
    messageBody: 'Hey Bob, how are you?',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '1',
    messageId: '1-2',
    messageBody: 'I’m doing great, Alice!',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
];

export async function GET(req: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const conversationId = params.conversationId;
    if (!conversationId) {
      return NextResponse.json({ error: 'Missing ConversationId' }, { status: 400 });
    }

    // Simulate a DB call by filtering your mock messages
    const userMessages = mockMessages.filter(
      (message) => message.conversationId === conversationId,
    );

    return NextResponse.json(userMessages, { status: 200 });
  } catch (err) {
    console.error('Failed GET messages:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
