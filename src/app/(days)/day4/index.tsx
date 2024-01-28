import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: Animated splash' }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ gap: 4 }}>
        <Link href="/day4/animation" asChild>
          <Button title="Go to the animation" />
        </Link>
        <Link href="/day4/splash" asChild>
          <Button title="Go to the splash screen" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
