import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = Array.from({ length: 24 }, (_, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    gap: 10,
  },
  column: {
    gap: 10,
    padding: 10,
  },
});
