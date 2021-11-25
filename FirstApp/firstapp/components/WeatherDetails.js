import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitSystem }) {
    const {
        main: { feels_like, humidity, pressure },
        wind: { speed },
    } = currentWeather;

    const windSpeed = unitSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{
                    ...styles.weatherDetailsBox,
                    borderRightWidth: 1,
                    borderRightColor: BORDER_COLOR,
                }}>
                    <View style={styles.weatherDetailsRow}>

                        <FontAwesome5
                            name="temperature-low"
                            size={25}
                            color={PRIMARY_COLOR}
                        />

                        <View style={styles.weatherDetailsItem}>

                            <Text style={styles.textSecondary}>Feels Like:</Text>
                            <Text style={styles.textSecondary} >{feels_like}°</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.weatherDetailsBox}>

                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons
                            name="water"
                            size={30}
                            color={PRIMARY_COLOR}
                        />

                        <View style={styles.weatherDetailsItem}>

                             <Text style={styles.textSecondary}>Humidity:</Text>
                            <Text style={styles.textSecondary} >{humidity}%</Text>
                        </View>

                    </View>
                </View>

            </View>
            <View style={{...styles.weatherDetailsRow,borderTopWidth:1,borderTopColor:BORDER_COLOR}}>
                <View style={{
                    ...styles.weatherDetailsBox,
                    borderRightWidth: 1,
                    borderRightColor: BORDER_COLOR,
                }}>
                    <View style={styles.weatherDetailsRow}>

                        <MaterialCommunityIcons
                            name="weather-windy"
                            size={25}
                            color={PRIMARY_COLOR}
                        />

                        <View style={styles.weatherDetailsItem}>

                            <Text style={styles.textSecondary}>WidSpeed:</Text>
                            <Text style={styles.textSecondary} >{windSpeed}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.weatherDetailsBox}>

                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons
                            name="speedometer"
                            size={30}
                            color={PRIMARY_COLOR}
                        />

                        <View style={styles.weatherDetailsItem}>

                             <Text style={styles.textSecondary}>Pressure</Text>
                            <Text style={styles.textSecondary} >{pressure}hPa</Text>
                        </View>

                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: "auto",
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSecondary: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        margin: 7,

    }
})

