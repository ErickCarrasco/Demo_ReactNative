import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <View style={styles.titleBox}>
          <Text style={styles.titleStyle}>
            Mein Machen List
          </Text>
        </View>
        <View style={styles.listItemSection}>
          <Task done={'not done'} task={'Make a 3D model on Unreal Engine 5'} />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0072ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    display: 'flex',
    backgroundColor: '#E8EAED',
    height: '80%',
    width: '90%',
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
    overflow: 'scroll',
    padding: 10,
  },  
});
