import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/task';
import { theme, textStyles, icons } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
          <MaterialCommunityIcons 
            name={item.completed ? icons.names.check : icons.names.uncheck}
            size={icons.size.medium}
            color={item.completed ? theme.colors.success : theme.colors.grey.medium}
          />
          <Text style={[
            styles.taskText,
            item.completed && styles.completedTask
          ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: theme.spacing.sm,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.small,
  },
  taskText: {
    ...textStyles.body,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: theme.colors.grey.medium,
  },
});