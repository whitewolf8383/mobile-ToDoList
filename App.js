import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, 
  TextInput, TouchableOpacity, Keyboard, ScrollView, 
  Modal, Button } 
  from 'react-native';
import Navigator from './routes/homeStack';
import Task from './components/Tasks';

let index = 0;

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  {/*Function to Add new tasks */}
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  {/*Function to Delete tasks */}
  const handleDeleteTask = (index) => {
    let tasksCopy = [...taskItems];
    tasksCopy.splice(index, 1);
    setTaskItems(tasksCopy)
  }

  {/*Function to Update tasks */}
  const handleUpdateTask = (i) => {
    index = i;
    setModalVisible(true);
  }

  const updateTask = () => {
    let tasksCopy = [...taskItems];
    tasksCopy[index] = task;
    setTaskItems(tasksCopy);
    setTask(null);
    setModalVisible(false);
  }

  return (
    <NavigationContainer>
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>To-Do List</Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <Task 
                    key={index}
                    text={item}
                    deleteTask={() => handleDeleteTask(index)} 
                    updateTask={() => handleUpdateTask(index)}
                  />
                )
              })
            }
          </View>
          <Modal 
            style={styles.modalStyles} 
            visible={modalVisible} 
            animationType='slide'
            >
            <View style={{marginBottom: 10}}>
              <TextInput 
                style={styles.input, 
                {textAlign: 'center',
                paddingTop: '40%',
                marginBottom: 10}}
                placeholder={'Update Task'} 
                value={task} 
                onChangeText={text => setTask(text)} 
              />
              <Button 
                color='green' 
                title='Update' 
                onPress={() => updateTask()}
              />
            </View>
            <Button
              title='Cancel'
              onPress={() => setModalVisible(false)}
            />
          </Modal>
        </View>
      </ScrollView>

      {/* Add new task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input}
          placeholder={'Write a task'} 
          value={task} 
          onChangeText={text => setTask(text)} 
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  items: {
    marginTop: 30
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  modalStyles: {
    paddingTop: '10%'
  }
});