import React from 'react'
import { View, Text } from 'react-native'

export default function Home(props) {
    return (
        <View>
            {props.task.map((item, index) => {
                return (
                    <Text key={index}>{item[index]}</Text>
                )
            })
        }
        </View>
    )
}
