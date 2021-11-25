import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
export default function App() {
  
  
  const [people, setPeople] = useState([

    { "name": "Anisha", "age": "23", id: "1" },
    { "name": "Khushboo", "age": "19", id: "2" },
    { "name": "Karan", "age": "21", id: "3" },
    { "name": "Disha", "age": "20", id: "4" },
    { "name": "Disha2", "age": "20", id: "5" },
    { "name": "Disha3", "age": "20", id: "6" },
    { "name": "Disha4", "age": "20", id: "7" },
    { "name": "Disha5", "age": "20", id: "8" },
    { "name": "Disha6", "age": "20", id: "9" },]
  );
  function pressHandler(id){
   setPeople((prevPeople)=>{
     return prevPeople.filter((person)=>person.id != id);
   })
  }
  return (
    <View style={styles.container}>
     <FlatList 
      numColumns={2}
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>{pressHandler(item.id)}}>

            <Text style={styles.item}>{item.name} - {item.age}</Text>
          </TouchableOpacity>

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
