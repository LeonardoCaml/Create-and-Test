import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import GlobalProvider from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [ fontsLoader, error ] = useFonts({
    "Poppins-Regurar": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-ExtraLight": require('../assets/fonts/Poppins-ExtraLight.ttf'),
    "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf')
  })

  useEffect(() => {
    if(error) throw error;

    if(fontsLoader) SplashScreen.hideAsync();
  }, [fontsLoader, error])

  if(!fontsLoader && !error) return null

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      </Stack>
    </GlobalProvider>
  );
}