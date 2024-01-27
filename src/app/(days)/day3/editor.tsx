import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import MarkdownDisplay from '@/components/day3/MarkDownDisplay';

const template = `# Markdown editor

Hello ***World!***

`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState('edit');
  return (
    <View style={styles.page}>
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setTab('edit')}
          style={[styles.tab, { borderColor: tab === 'edit' ? 'mediumorchid' : 'gray' }]}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('preview')}
          style={[styles.tab, { borderColor: tab === 'preview' ? 'mediumorchid' : 'gray' }]}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === 'edit' ? (
        <TextInput
          textAlignVertical="top"
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 20,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'InterBold',
  },
});
