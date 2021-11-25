import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
export default function App() {
  
  
 
  return (
    <View style={styles.container}>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    height: 50,
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "pink",
    fontSize: 18,
    marginHorizontal: 10,
  }
});
