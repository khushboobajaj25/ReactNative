import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity >
            <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <MaterialIcons name="delete" size={24} color="red" onPress={() => pressHandler(item.key)} style={styles.icon}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection:"row",
        // flex:1

    },
    text: {
        fontSize:20,
    },
    icon:{
        marginLeft: "auto",
    }
})
