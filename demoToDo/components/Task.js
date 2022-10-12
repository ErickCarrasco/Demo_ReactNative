import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Task = ({done, task}) => {
  console.log(done);
  console.log(task);
  return(
    <View>
      <Text>Your Task {task} is {done}</Text>
    </View>
  )
}

export default Task;