import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Theme constants for the application
export const theme = {
  colors: {
    // Ubuntu brand colors
    primary: '#E95420', // Ubuntu Orange
    black: '#2C2C2C', // Ubuntu Black
    white: '#FFFFFF',
    grey: {
      light: '#F7F7F7',
      medium: '#AEA79F', // Ubuntu Warm Grey
      dark: '#666666'
    },
    success: '#0E8420', // Ubuntu Green
    error: '#C7162B' // Ubuntu Red
  },
  typography: {
    fontFamily: {
      regular: 'Ubuntu',
      medium: 'Ubuntu-Medium',
      bold: 'Ubuntu-Bold'
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  }
};

export type Theme = typeof theme;

// Common text styles
export const textStyles = {
  h1: {
    fontSize: theme.typography.fontSize.xxxl,
    fontFamily: theme.typography.fontFamily.bold,
    color: theme.colors.black,
    lineHeight: theme.typography.lineHeight.tight
  },
  h2: {
    fontSize: theme.typography.fontSize.xxl,
    fontFamily: theme.typography.fontFamily.bold,
    color: theme.colors.black,
    lineHeight: theme.typography.lineHeight.tight
  },
  h3: {
    fontSize: theme.typography.fontSize.xl,
    fontFamily: theme.typography.fontFamily.medium,
    color: theme.colors.black,
    lineHeight: theme.typography.lineHeight.tight
  },
  body: {
    fontSize: theme.typography.fontSize.base,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.colors.black,
    lineHeight: theme.typography.lineHeight.normal
  },
  caption: {
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.colors.grey.dark,
    lineHeight: theme.typography.lineHeight.normal
  }
};

export const icons = {
  names: {
    add: 'plus-circle',
    check: 'checkbox-marked-circle',
    uncheck: 'checkbox-blank-circle-outline',
    tasks: 'format-list-checks',
  },
  size: {
    small: 20,
    medium: 24,
    large: 32,
  }
} as const;