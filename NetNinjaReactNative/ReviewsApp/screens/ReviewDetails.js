import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native'
import Cards from '../shared/Cards';
import { globalStyles, globalImage } from '../styles/global'

export default function ReviewDetails({route,navigation}) {
   const {title, body, rating} = route.params;
    
    return (
        <View style={globalStyles.container}>
        <Cards>
           <Text>{title}</Text>
           <Text>{body}</Text>
           <View style={styles.rating}>
                <Text>Ratings</Text>
                <Image
                    source={globalImage.ratings[rating]}
                />
           </View>
        </Cards>
           
        </View>
    )
}
const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})
