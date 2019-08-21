import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableWithoutFeedback  onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
})

export default GoalItem;