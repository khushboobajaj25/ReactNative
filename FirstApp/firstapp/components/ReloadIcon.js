import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {colors} from "../utils/index";

const{PRIMARY_COLOR, SECONDARY_COLOR} = colors;
export default function ReloadIcon({load}) {
    const refreshIconName =
        Platform.OS ==="ios" ? "ios-refresh" : "md-refresh";
    return (
        <View style={styles.reload}>
            <Ionicons onPress={load} name={refreshIconName} size={24} color={PRIMARY_COLOR} />
        </View>
    );
}

const styles = StyleSheet.create({
    reload: {
        position: "absolute",
        top: 60,
        right: 20,
        color: PRIMARY_COLOR,
    },
});
