import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Task } from '../types/task';
import { theme, textStyles } from '../theme';
import { useTaskStore } from '../store/taskStore';

export function TaskList() {
  const { tasks, toggleTask } = useTaskStore();

  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleTask(item.id)}
    >
      <Text style={[styles.taskText, item.completed && styles.completedText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={tasks.length ? styles.listContainer : styles.emptyContainer}
      ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet!</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...textStyles.body,
    color: theme.colors.grey.dark,
  },
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
    fontFamily: 'Ubuntu',
    color: '#000',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
