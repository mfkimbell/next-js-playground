'use client';
import { useState, useEffect } from 'react';
import { Task } from '@/app/types';
import { Checkbox } from '@/components/ui/checkbox';

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const defaultTasks: Task[] = [
      { isCompleted: false, text: 'Drink a hand grenade' },
      {
        isCompleted: true,
        text: 'Drive to NOLA',
      },
    ];
    setTasks(defaultTasks);
  }, []);

  const handleCheckClick = (index: number) => {
    console.log('index', index);
    let updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], isCompleted: !updatedTasks[index].isCompleted };
    //or
    const updatedTasks2 = tasks.map((task, index2) => {
      if (index === index2) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks2);
  };

  return (
    <div className="flex flex-row justify-center border rounded-3xl border-2 border-gray-500 bg-gray-900 w-150 h-190">
      <div className="flex flex-col">
        <div className="text-3xl m-4">Todo</div>
        {tasks.map((task, index) => {
          return (
            <div key={index} className="flex flex-row m-1 items-center">
              <Checkbox
                checked={task.isCompleted}
                onClick={() => handleCheckClick(index)}
                className="w-5 h-5"
              ></Checkbox>
              <div className={`ml-2 ${task.isCompleted ? 'line-through' : ''} text-lg`}>
                {task.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
