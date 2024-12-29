import { create } from 'zustand';
import { Task } from '../types/task';
import { storage } from '../utils/storage';

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  initializeTasks: () => Promise<void>;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  loading: true,
  
  initializeTasks: async () => {
    try {
      const storedTasks = await storage.loadTasks();
      set({ tasks: storedTasks, loading: false });
    } catch (error) {
      console.error('Failed to load tasks:', error);
      set({ loading: false });
    }
  },

  addTask: (title: string) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    const updatedTasks = [...get().tasks, newTask];
    set({ tasks: updatedTasks });
    storage.saveTasks(updatedTasks);
  },

  toggleTask: (id: string) => {
    const updatedTasks = get().tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    set({ tasks: updatedTasks });
    storage.saveTasks(updatedTasks);
  },
}));