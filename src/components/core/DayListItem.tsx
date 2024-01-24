import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type DayListItem = {
  day: number;
};

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable key={day} style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#9b4521',
    fontSize: 50,
    fontFamily: 'AmaticBold',
  },
});
