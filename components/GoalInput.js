import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.content}>
            <TextInput 
                placeholder="Add a goal" 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={ props.onAddGoal.bind(this, enteredGoal) } />
        </View>
    );

};

const styles = StyleSheet.create({
    content: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black', 
      borderWidth: 1, 
    },
    
});

export default GoalInput;