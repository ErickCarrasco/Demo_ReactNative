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
    margin: 5,
  },
  eliminationIcon: {
    width: 12,
    height: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
  },
  selectionArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  completedStyle: {
    fontSize: 10,
    color: 'green',
    fontStyle: 'italic',
  },    
});

const Task = ({done, task, completeTask, deleteTask}) => {
  console.log(done);
  console.log(task);
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.squareIcon} />
      <Text style={styles.taskTextStyle}>
        {task}
      </Text>
      {done && 
        <Text>
          Done
        </Text>
      }
      <View style={styles.selectionArea}>
        {!done &&
          <TouchableOpacity style={styles.circleIcon} onPress={completeTask} />
        }
        <TouchableOpacity style={styles.eliminationIcon} onPress={deleteTask} />
      </View>
    </View>
  )
}

export default Task;