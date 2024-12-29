import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.taskItem} 
          onPress={() => onToggleTask(item.id)}
        >
          <Text style={[
            styles.taskText,
            item.completed && styles.completedTask
          ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});