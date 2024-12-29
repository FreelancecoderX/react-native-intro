import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Task } from './types/task';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { theme, textStyles, icons } from './theme';
import { storage } from './utils/storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadStoredTasks();
  }, []);

  useEffect(() => {
    storage.saveTasks(tasks);
  }, [tasks]);

  const loadStoredTasks = async () => {
    const storedTasks = await storage.loadTasks();
    setTasks(storedTasks);
  };

  const addTask = (title: string) => {
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title, completed: false }
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons 
          name={icons.names.tasks} 
          size={icons.size.large} 
          color={theme.colors.primary} 
        />
        <Text style={textStyles.h1}>Taskly</Text>
      </View>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
});