import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme, textStyles, icons } from '../theme';
import { useTaskStore } from '../store/taskStore';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export function TaskInput() {
  const { addTask } = useTaskStore();
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new task"
        placeholderTextColor={theme.colors.grey.medium}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <MaterialCommunityIcons
          name={icons.names.add}
          size={icons.size.medium}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginVertical: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  input: {
    flex: 1,
    ...textStyles.body,
    backgroundColor: theme.colors.grey.light,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'center',
  },
});
