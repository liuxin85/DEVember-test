import { Pressable, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Stack, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const onboardingSteps = [
  {
    icon: 'snowflake',
    title: 'Welcome #DEVember',
    description: 'Daily React Native tutorial during Decemberr',
  },
  {
    icon: 'people-arrows',
    title: 'Learn and grow togeter',
    description: 'Learn by building 24 projects with React Native and Expo',
  },
  {
    icon: 'book-reader',
    title: 'Education for Children',
    description: "Contribute to the fundraiser 'Education for children' to help the children.",
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? '#CEF202' : 'grey' },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <FontAwesome5 style={styles.image} name={data.icon} size={100} color="#CEF202" />

          <View style={styles.footer}>
            <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}>
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',

    padding: 20,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 50,
  },
  footer: {
    marginTop: 'auto',
  },
  title: {
    color: '#FDFDFD',
    fontSize: 46,
    fontFamily: 'InterBlack',
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: 'gray',
    fontSize: 18,
    fontFamily: 'Inter',
    lineHeight: 28,
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#302E38',

    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FDFDFD',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
  },

  // steps
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 15,
  },

  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: 'gray',

    borderRadius: 10,
  },
});
