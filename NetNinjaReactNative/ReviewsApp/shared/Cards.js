import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Cards(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
            {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 3,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        shadowRadius: 2,
        

       
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
})