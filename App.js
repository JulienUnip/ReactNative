import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { key: Math.random().toString(), value: goalTitle } 
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  screen: {
    padding: 50
  },
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
  },
  
});
