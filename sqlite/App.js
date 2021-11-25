import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
// import { openDatabase } from "react-native-sqlite-storage";
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase(
  "rn_sqlite",
);

export default function App() {

  const [category, setCategory] = useState('');
  const[categories,setCategories] = useState([]);
  const createTables = () => {
    console.log("Creating tables...");
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
        [],

        (sqlTxn, res) => {
          console.log("table created successfully");
        },
        error => {
          console.log('====================================');
          console.log("error: ", error);
          console.log('====================================');
          console.log("error on creating table " + error.message);
        },
      );
    });
  }
  const addCategory = () => {
    if (!category) {
      alert("Please enter category:");
      return false;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categories (name) VALUES (?)",
        [category],
        (sqlTxn, res) => {
          console.log(`${category} added successfully`);
          setCategory("");
          getCategories();
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    });
  };
  const getCategories = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM categories",
        [],
        (sqlTxn, res) => {
          console.log("res: ", res);
          console.log("res.rows.length: ", res.rows.length);
          const len =   res.rows.length;
          if(len>0){
            let result = [];
            for (let i = 0; i < res.rows.length; i++) {
              let item = res.rows.item(i);
              result.push({id:item.id,name:item.name});
            }
            setCategories(result);
          }    

        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    });}
  const randomCategory =({item})=>{
    return(
      <View style={{
        flexDirection:"row",
        paddingVertical:12,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:"#ddd"
      }}>
        <Text style={{marginRight:9 }}>{item.id}</Text>
        <Text>{item.name}</Text>

      </View>
    )
  }



  useEffect(async () => {
    await createTables();
    await getCategories();
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{marginTop:80, fontSize:50}}>Sqlite App</Text>
      <StatusBar style="auto" backgroundColor="orange" />
      <TextInput
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
        style={{ marginHorizontal: 9, marginTop: 100, borderColor: "gray", borderWidth: 1, padding: 5, marginBottom:15, width: "80%", textAlign:"center" }}
      />
      <Button title="Submit" style={{marginTop:30, width:"100%"}}  onPress={addCategory}  />
      <FlatList data={categories} renderItem={randomCategory} key={cat=> cat.id} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
