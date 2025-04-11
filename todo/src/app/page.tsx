import Image from 'next/image';
import Header from '@/components/Header';
import Todo from '@/components/Todo';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <div className="flex flex-1 justify-center items-center">
        <Todo></Todo>
      </div>
    </div>
  );
}
