import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
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
