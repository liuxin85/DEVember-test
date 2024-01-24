import { StatusBar } from 'expo-status-bar';
import DayListItem from '../components/core/DayListItem';
import { FlatList, View, StyleSheet } from 'react-native';

const days = Array.from({ length: 24 }, (_, index) => index + 1);

export default function HomeScreen() {
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
