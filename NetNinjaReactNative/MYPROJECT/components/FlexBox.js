import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function SandBox() {
    return (
        <View >
        <Text>Hi</Text>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />

        </View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />

        </View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />

        </View>


        </View>
    )
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
      },
    container: {
        // flex:1,
        paddingTop: 50,
        // backgroundColor: '#ddd',
        // borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50,
        color: '#fff',

    },
    boxOne: {
        backgroundColor: "violet",
        padding: 10,
        height: 50,
    },
    boxTwo: {
        backgroundColor: "pink",
        padding: 10,
    },
    boxThree: {
        backgroundColor: "blue",
        padding: 10,
    },
    boxFour: {
        backgroundColor: "coral",
        padding: 10,
    }
})