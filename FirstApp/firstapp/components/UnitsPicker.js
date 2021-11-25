import React from 'react'
import { View,StyleSheet, Platform} from 'react-native'
import {Picker} from "@react-native-picker/picker";

export default function UnitsPicker(props) {
    return (
        <View style={styles.units}>
            <Picker selectedValue={props.unitSystem} onValueChange={(item)=>props.setUnits(item)} mode="dropdown" itemStyle={{fontSize:12}}>

            <Picker label="°C" value="metric"/>
            <Picker label="°F" value="imperial"/>
            </Picker>
        </View>
    )
}
const styles=StyleSheet.create({
    units:{
        position:'absolute',
        ...Platform.select({
            ios:{
                top:-20,
            },
            android:{
                top:-10,
            }

        }),
        top:50,
        width:100,
        height:50,
        left:20,
    }
});
