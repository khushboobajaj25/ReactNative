import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomButton(props) {
    return (
       <TouchableOpacity onPress={props.onPress}>
              <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.title}
                    </Text>
                </View>

       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f01d71',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    }   
})