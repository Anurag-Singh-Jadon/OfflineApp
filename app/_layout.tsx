
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Realm from '../src/providers/Realm';
export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack screenOptions={{ title: 'Hello' }}></Stack>
      </Realm>
      <StatusBar style='light' />
    </ThemeProvider >
  )
}
