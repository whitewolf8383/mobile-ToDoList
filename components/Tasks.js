import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, 
  Pressable } from 'react-native';

const Tasks = (props) => {
  const [textLine, setTextLine] = useState('none');

  {/*Function to mark tasks Complete */}
  const handleTextLine = () => {
    textLine === 'none' ? setTextLine('line-through') : setTextLine('none');
  }

  return (
      <Pressable onPress={() => handleTextLine()} style={styles.item}>
        <View style={styles.itemLeft}>
          <Text 
            style={{
              textDecorationLine: textLine
            }}
          >{props.text}{'\n'}
            <Text 
            style={{
              fontSize: 10,
              textAlign: 'left'
            }}
          >Tap to mark complete.</Text>
          </Text>
          
        </View>
        <TouchableHighlight
          style={{marginLeft: -20}}
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
      </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 7,
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
  }
});

export default Tasks;