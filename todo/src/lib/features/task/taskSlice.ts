// lib/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/app/types';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

const taskSlice = createSlice({
  initialState,
  name: 'task',
  reducers: {
    clearTasks(state) {
      state.tasks = [];
    },
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => {
        if (task.text === action.payload.text) {
          return task;
        }
      });
    },
  },
});

// Auto-generated action creators and reducer
export const { clearTasks, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
