import React from 'react';
import { View, Text } from 'react-native';

export default function TaskItem({ task }) {
  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  );
  
}
export default function TaskItem({ contacts }) {
  return (
    <View>
      <Text>{contacts.title}</Text>
    </View>
  );
  
}
