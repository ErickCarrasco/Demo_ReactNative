import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.mainBox}>
          <View style={styles.titleBox}>
            <Text style={styles.titleStyle}>
              Aufgabenliste
            </Text>
          </View>
          <View style={styles.listItemSection}>
            {
              taskList.map((item, index) => {
                return(
                  <Task task={item} done={'no'} completeTask={() => completeTask(index)} /> 
                )
              })
            }
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mainBox: {
    display: 'flex',
    backgroundColor: '#E8EAED',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 10,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: '700',
  },
  listItemSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
