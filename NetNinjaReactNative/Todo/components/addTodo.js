import React,{useState} from 'react'
import { View, Text, StyleSheet,TextInput, Button } from 'react-native'

export default function AddTodo({submitHandler}) {
    const [text,setText]=useState('');
    const changeHandler = (val) =>{
        setText(val);
    }
    const setTextHandler = () =>{
        setText("");
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Enter Todo"
            onChangeText={changeHandler}
            value={text}
            
            />
            <Button title="Add"  onPress={() =>  {
                submitHandler(text);
                setTextHandler();
            }}
                
                
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'

    }
})
