import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';

const Tasks = (props) => {
  const [markCompleted, setMarkedComplete] = useState();

  const completeTask = () => {
    
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text 
          style={props.currentStyles}
        >{props.text}</Text>
      </View>
      <TouchableHighlight
        style={styles.btnStyle}
        activeOpacity={0.5}
        underlayColor='#0c8df3'
      >
        <Button
          accessibilityLabel='Update task button'
          title='Update'
          onPress={props.updateTask}
        />
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor='#ff0009'
      >
        <Button 
          color='#c13e41'
          accessibilityLabel='Delete task button'
          title='X'
          onPress={props.deleteTask}
        />
      </TouchableHighlight>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '70%'
  },
  btnStyle: {
    marginLeft: -20
  }
});

export default Tasks;