'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [user, setUser] = useState(null);

  return (
    <header className="border border-zinc-600 flex justify-between p-2">
      <img src="/vercel.svg" className="w-5 h-5 "></img>
      <h1 className="text-1xl"> NextJS App</h1>
      <img src="/profile.png" alt="profile icon" className="dark:invert w-6 h-6"></img>
    </header>
  );
}
