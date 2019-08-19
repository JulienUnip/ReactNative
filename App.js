import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <TextInput 
          placeholder="Add a goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <ScrollView>
        {courseGoals.map( (goal) => 
            <View style={styles.listItem}>
                <Text key={goal}>{goal}</Text>
            </View>
        )}
      </ScrollView>

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
  listItem: {
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
