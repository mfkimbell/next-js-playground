'use client';

import { useEffect, useState } from 'react';
import { Conversation } from '@/app/types';

type SidebarProps = {
  conversations?: Conversation[] | null;
  handleSelectConversation: (id: string) => void;
  selectedConversation: string | null;
};

export default function Sidebar({
  conversations = null,
  handleSelectConversation,
  selectedConversation,
}: SidebarProps) {
  return (
    <div className="border border-gray-600 w-1/4">
      {conversations?.map((conv, index) => {
        console.log('selected', selectedConversation);
        console.log('id: ', selectedConversation == conv.id);
        return (
          <div
            onClick={() => handleSelectConversation(conv.id)}
            className={`border border-gray-600 h-18 p-2 overflow-hidden whitespace-nowrap text-sm cursor-pointer ${
              conv.id === selectedConversation ? 'bg-blue-600 text-white' : 'hover:bg-zinc-800'
            }`}
            key={index}
          >
            <div className="flex flex-row">
              <img src="/profile.png" className="w-4 h-4 mt-0.5 mr-2 dark:invert"></img>
              <div className="flex flex-col">
                <span>{conv.participants[0]}</span>
                <span>{conv.lastMessageText}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
