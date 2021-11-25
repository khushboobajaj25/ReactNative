import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function FlatLists() {
  const [people, setPeople] = useState([

    { "name": "Anisha", "age": "23", id: "1" },
    { "name": "Khushboo", "age": "19", id: "2" },
    { "name": "Karan", "age": "21", id: "3" },
    { "name": "Disha", "age": "20", id: "4" },
    { "name": "Disha", "age": "20", id: "5" },
    { "name": "Disha", "age": "20", id: "6" },
    { "name": "Disha", "age": "20", id: "7" },
    { "name": "Disha", "age": "20", id: "8" },
    { "name": "Disha", "age": "20", id: "9" },]
  );


  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => (

          <Text style={styles.item}>{item.name} - {item.age}</Text>
        )}
      />


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
  header: {
    backgroundColor: "pink",
    padding: 20,

  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
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
