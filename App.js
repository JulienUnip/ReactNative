import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
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

      <View style={styles.input}>

      </View>
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
    borderBottomWidth: 1, 
    padding: 10 
  }
});
