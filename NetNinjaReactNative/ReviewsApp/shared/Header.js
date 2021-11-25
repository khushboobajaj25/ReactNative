import React from "react";
import { StyleSheet,Text, View, Image, ImageBackground  } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export default function Header( props ){
    return(
        <View style={styles.header}>
            {/* Icon for the menu */}
            {/* <MaterialIcons name="menu" size={30} color="white" style={styles.icon} onPress={props.toggleDrawer}/> */}
            <View style={styles.headerTitle}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.headerText}>{props.title}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    headerTitle:{
        flexDirection:'row',
    
    },
    logo:{
        width:50,
        height:26,
        marginRight:10,
    },
    header: {
        width: "100%",
        height: "100%",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    headerText: {
        color: "white",
        fontSize: 20,
        letterSpacing: 1,
        textAlign: "center",
    }
})