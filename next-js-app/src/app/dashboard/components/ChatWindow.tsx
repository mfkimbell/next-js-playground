'use client';
import { Message } from '@/app/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ChatBubble from '@/app/dashboard/components/ChatWindow/ChatBubble';
import { PostMessage } from '@/app/lib/repositories/messageRepository';
import { useState } from 'react';

enum direction {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}

type ChatWindowProps = {
  messages: Message[];
};

export default function ChatWindow({ messages }: ChatWindowProps) {
  const [input, setInput] = useState('');
  const handleClick = async () => {
    console.log('Sending Message');
    const newMessage: Message = {
      conversationId: '1', // Replace this with actual conversation id
      messageId: new Date().getTime().toString(), // Simple unique id using timestamp
      messageBody: input,
      sentDate: new Date(),
      direction: direction.Incoming, // Adjust as needed
    };

    await PostMessage(newMessage);
    setInput('');
  };

  console.log('messages prop', messages);
  return (
    <div className="flex flex-col flex-1">
      <div className="border border-gray-600 flex-1">
        {messages.map((message) => {
          console.log('message', message);
          return (
            <div key={message.messageId}>
              <ChatBubble
                message={message.messageBody}
                incoming={message.direction === 'incoming'}
              ></ChatBubble>
            </div>
          );
        })}
      </div>
      <div className=" h-10 m-1 flex flex-row">
        <Input placeholder="Twilio" onChange={(e) => setInput(e.target.value)}></Input>
        <Button type="submit" onClick={handleClick} className="ml-2 mr-2" variant="secondary">
          Send
        </Button>
      </div>
    </div>
  );
}
