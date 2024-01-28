import { StyleSheet, View } from 'react-native';
import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import {
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedSplashScreen from '@/components/day4/AnimatedSplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAniamtionFinished] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,

    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;

  if (showAnimatedSplash) {
    return <AnimatedSplashScreen onAnimationFinish={() => setSplashAniamtionFinished(true)} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen
            name="index"
            options={{
              title: 'DEVember',
            }}
          />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
