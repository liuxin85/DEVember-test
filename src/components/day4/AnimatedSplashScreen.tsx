import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = () => {},
}: {
  onAnimationFinish?: () => void;
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        style={{
          width: '80%',
          maxWidth: 400,
          height: 200,
        }}
        loop={false}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({});
