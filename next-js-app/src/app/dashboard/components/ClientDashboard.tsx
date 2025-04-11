'use client';

import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Header from '@/app/components/Header';
import Head from 'next/head';
import Sidebar from '@/app/dashboard/components/Sidebar';
import ChatWindow from '@/app/dashboard/components/ChatWindow';
import { useState, useEffect } from 'react';
import { Conversation, Message } from '@/app/types';
import { GetMessages } from '@/app/lib/repositories/messageRepository';

type ClientDashboardProps = {
  conversations: Conversation[] | null;
};

export default function ClientDashboard({ conversations }: ClientDashboardProps) {
  const [conversationList, setConversationList] = useState<Conversation[] | null>(conversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  console.log(conversationList);

  //   useEffect(() => {
  //     async function grabData() {
  //       const res = await fetch('/api/conversations');
  //       const data = await res.json();
  //       setConversations(data.conversations);
  //     }
  //     grabData();
  //   }, []);

  const handleSelectConversation = (id: string) => {
    setSelectedConversation(id);
  };

  useEffect(() => {
    async function getMessages() {
      try {
        let messages = await GetMessages(selectedConversation);
        setMessages(messages);
      } catch (err) {
        console.error('Error fetching messages with id: ', selectedConversation);
      }
    }
    getMessages();
  }, [selectedConversation]);

  useEffect(() => {
    if (!conversationList) return;

    for (const conversation of conversationList) {
      console.log(conversation);
    }
  }, [conversationList]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <div className="flex flex-1">
        <Sidebar
          conversations={conversations}
          handleSelectConversation={handleSelectConversation}
          selectedConversation={selectedConversation}
        ></Sidebar>
        <ChatWindow messages={messages}></ChatWindow>
      </div>
    </div>
  );
}
