import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Integrate Markdown content in **Ract Native**

Today's Agenda:
- Introduction to Markdown
- Markdown Systax Overview
- Setting Up React Native for Markdown
- Implementing Markdonw Rendering
- Styling Markdown Content
- Using Markdwon in React Native Components
- Recap and Q&A Session
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'red', flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
