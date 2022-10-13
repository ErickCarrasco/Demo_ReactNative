import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 10,
  },
  squareIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#55BCF6',
    opacity: 0.2,
    marginRight: 10,
  },
  taskTextStyle: {
    fontSize: 18,
  },
  circleIcon: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

const Task = ({done, task, completeTask}) => {
  console.log(done);
  console.log(task);
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.squareIcon} />
      <Text style={styles.taskTextStyle}>
        {task}
      </Text>
      <TouchableOpacity style={styles.circleIcon} onPress={completeTask} />
    </View>
  )
}

export default Task;