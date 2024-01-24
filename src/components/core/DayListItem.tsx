import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type DayListItemProps = {
  day: number;
};

const DayListItem = ({ day }: DayListItemProps) => {
  return (
    <View key={day} style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
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
  },
});
