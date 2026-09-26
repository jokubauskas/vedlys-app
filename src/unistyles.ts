import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
  },
};

const darkTheme: typeof lightTheme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  // oxlint-disable-next-line typescript/no-empty-object-type -- module augmentation
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: appThemes,
});
