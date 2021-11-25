import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function TextInputs() {
    const [name, setName] = useState('Rajat');
    const [age, setAge] = useState("23");
    return (
        <View style={styles.container}>
            <Text>Enter Name</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder="Eg. Khush"
                onChangeText={(value) => setName(value)}

            />
            <Text>Enter Age</Text>
            <TextInput
                style={styles.input}
                placeholder="Eg. 18"
                onChangeText={(value) => setAge(value)}
                keyboardType="numeric"

            />
            <Text>name:{name} age:{age}</Text>

        </View>
    )
}
