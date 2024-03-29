import { StyleSheet } from 'react-native';
import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import React from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: 'DEVemberr',
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
