import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { theme, textStyles, icons } from './theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useTaskStore } from './store/taskStore';

export default function App() {
  const { loading, initializeTasks } = useTaskStore();
  
  const [fontsLoaded] = useFonts({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  React.useLayoutEffect(() => {
    initializeTasks();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

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
      <TaskInput />
      <TaskList />
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
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
});
