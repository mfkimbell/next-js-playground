import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/app/types';
import { toast } from 'react-toastify';
enum direction {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}
// Generate mock messages
const mockMessages: Message[] = [
  // Conversation 1
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
  {
    conversationId: '1',
    messageId: '1-3',
    messageBody: 'Wanna catch up later?',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '1',
    messageId: '1-4',
    messageBody: 'Sure, let’s do it!',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '1',
    messageId: '1-5',
    messageBody: 'Awesome, see you soon.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },

  // Conversation 2
  {
    conversationId: '2',
    messageId: '2-1',
    messageBody: 'Let’s catch up tomorrow.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '2',
    messageId: '2-2',
    messageBody: 'Sounds good to me.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '2',
    messageId: '2-3',
    messageBody: 'What time works?',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '2',
    messageId: '2-4',
    messageBody: 'Maybe around 4?',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '2',
    messageId: '2-5',
    messageBody: 'Perfect.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },

  // Conversation 3
  {
    conversationId: '3',
    messageId: '3-1',
    messageBody: 'Meeting is at 3 PM.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '3',
    messageId: '3-2',
    messageBody: 'Thanks for the reminder.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '3',
    messageId: '3-3',
    messageBody: 'Bring your notes.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '3',
    messageId: '3-4',
    messageBody: 'Will do!',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '3',
    messageId: '3-5',
    messageBody: 'See you there.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },

  // Conversation 4
  {
    conversationId: '4',
    messageId: '4-1',
    messageBody: 'Check out the docs I sent.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '4',
    messageId: '4-2',
    messageBody: 'Got it. Will review today.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '4',
    messageId: '4-3',
    messageBody: 'Let me know if you have questions.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '4',
    messageId: '4-4',
    messageBody: 'Sure thing.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '4',
    messageId: '4-5',
    messageBody: 'Thanks again.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },

  // Conversation 5
  {
    conversationId: '5',
    messageId: '5-1',
    messageBody: 'Thanks! Talk soon.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '5',
    messageId: '5-2',
    messageBody: 'Bye!',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '5',
    messageId: '5-3',
    messageBody: 'Ping me if needed.',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
  {
    conversationId: '5',
    messageId: '5-4',
    messageBody: 'Will do.',
    sentDate: new Date(),
    direction: direction.Outgoing,
  },
  {
    conversationId: '5',
    messageId: '5-5',
    messageBody: 'Take care!',
    sentDate: new Date(),
    direction: direction.Incoming,
  },
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get('conversationId');
    if (!conversationId) {
      return NextResponse.json({ error: 'Missing ConversationId' }, { status: 400 });
    }
    // THIS IS WHERE A DB CALL WOULD BE
    const userMessages = mockMessages.filter(
      (message) => message.conversationId === conversationId,
    );
    return NextResponse.json(userMessages, { status: 200 });
  } catch (err) {
    console.error('failed GET messages: ', err);
    return NextResponse.json({ error: 'internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('body2: ', body);
    console.log('after post');
    // PUTS INTO DATABASE
    return NextResponse.json({ body, status: 200 });
  } catch (err) {
    console.error('server error posting message: ', err);
    return NextResponse.json({ error: 'internal server error posting message' }, { status: 500 });
  }
}
