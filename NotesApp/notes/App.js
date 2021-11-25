import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Home from './components/Home';

export default function App() {
  const [task, setTask] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  function handleTask() {
    if (currentTask) {
      console.log(currentTask);
      const MyArr = task;
      MyArr.push(currentTask);

      setTask(MyArr);
      console.log(task);

    }
    // setCurrentTask(null);

  }
  return (
    < View style={styles.container}>
      <Text style={styles.header}>Notes App</Text>
      {/* <TouchableOpacity></TouchableOpacity> */}
      <Home task={task} />
      {/* <Home/> */}
      <TextInput
        placeholder="Enter Text in TextInput"
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        onChangeText={setCurrentTask}
        value={currentTask}
      />


      <TouchableOpacity style={styles.roundButton1} onPress={handleTask}>
        <Text>+</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  header:{
    marginTop:50,
  },
  
  roundButton1: {
   
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "pink",
    marginTop: -100,
    marginLeft:300,
    // marginBottom:30,
    
  },
  TextInputStyleClass: {

    // Setting up Hint Align center.
    marginTop: 580,
    // marginBottom: -70,
    marginLeft: 20,
    marginRight:60,
    width: 280,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 16,


  },

});
