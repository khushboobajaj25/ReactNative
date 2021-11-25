import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './components/TodoItem';
import Header from "./components/Header";
import AddTodo from "./components/addTodo";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy sandwich", key: "1" },
    { text: "buy coffe", key: "2" },
    { text: "buy tea", key: "3" }
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }
  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert("Error", "Todo must be at least 3 characters long", [{ text: "Understood", onPress: () => console.log("alert closed") }]);
      return;
    }
    else {

      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: Math.random().toString() }];
      })
    }
  }
  return (
    
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}


            />
          </View>
        </View>
      </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    flex:1,
    padding: 40,


  },
  list: {
    flex:1,
    marginTop: 20
  }
});
