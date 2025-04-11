import { NextResponse, NextRequest } from 'next/server';
import { Conversation } from '@/app/types';

const defaultConversations: Conversation[] = [
  {
    id: '1',
    lastMessageText: 'Hey there!',
    lastMessageTime: new Date(),
    participants: ['Alice', 'Bob'],
  },
  {
    id: '2',
    lastMessageText: 'Let’s catch up tomorrow.',
    lastMessageTime: new Date(),
    participants: ['Charlie'],
  },
  {
    id: '3',
    lastMessageText: 'Meeting is at 3 PM.',
    lastMessageTime: new Date(),
    participants: ['Dana', 'Eli'],
  },
  {
    id: '4',
    lastMessageText: 'Check out the docs I sent.',
    lastMessageTime: new Date(),
    participants: ['Fiona'],
  },
  {
    id: '5',
    lastMessageText: 'Thanks! Talk soon.',
    lastMessageTime: new Date(),
    participants: ['George', 'Hannah'],
  },
];

export async function GET() {
  try {
    return NextResponse.json(defaultConversations, { status: 200 });
  } catch (err) {
    console.error('Failed to fetch conversations:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // HERE WE WOULD CONNECT TO DB, POST AND RETURN THE OBJECT?
    const body = await req.json();
  } catch (err) {
    console.error('Failed to post conversation');
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
