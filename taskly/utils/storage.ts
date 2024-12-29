import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/task';

const TASKS_KEY = '@taskly_tasks';

export const storage = {
  async saveTasks(tasks: Task[]) {
    try {
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  },

  async loadTasks(): Promise<Task[]> {
    try {
      const tasks = await AsyncStorage.getItem(TASKS_KEY);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  }
};