'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { useSelector } from 'react-redux';
import { setUser } from '../lib/features/user/usersSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user); // ✅ top-level hook

  useEffect(() => {
    const user2 = { id: '1', role: 'admin', credits: 3 };
    dispatch(setUser(user2));
  }, [dispatch]);

  console.log(user);

  return (
    <div>
      <div className="border border-blue-500 border-4 flex flex-col min-h-screen">
        <Header></Header>
        <div className=" border border-yellow-600 flex flex-1 flex-row justify-center items-center">
          <div className="flex flex-col border justify-between items-center border-zinc-600 bg-gray-900 w-80 h-80 rounded-2xl">
            <p>Welcome</p>
            <div className="flex flex-1 items-center justify-center">
              <Link href="/dashboard">
                <button className="border border-zinc-700 rounded rouded-lg bg-blue-800 cursor-pointer hover:opacity-80">
                  <span className="m-1 ml-2 mr-2">Login</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
