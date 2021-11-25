import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import logo from "./assets/icon.png";
import UnitsPicker from "./components/UnitsPicker";
import {colors} from "./utils/index";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";



const{PRIMARY_COLOR, SECONDARY_COLOR} = colors;
const WEATHER_API_KEY = "36c304bc5f045c421f2d468b5c7ed422";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [units, setUnits] = useState("metric");

    useEffect(() => {
        load();
    }, [units]);
    async function load() {
        setCurrentWeather(null);
        setError(null);
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError(
                    "Permission to access location is needed to run the app"
                );
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;

            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`;

            const response = await fetch(weatherUrl);

            const result = await response.json();
            if (response.ok) {
                setCurrentWeather(result);
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (currentWeather) {
        const {
            main: { temp },
        } = currentWeather;

        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.main}>
                    <UnitsPicker unitSystem={units} setUnits={setUnits} />
                    <ReloadIcon load={load} />
                    <WeatherInfo currentWeather={currentWeather} />
                </View>
                <WeatherDetails currentWeather={currentWeather} unitSystem={units} />
            </View>
        );
    } else if(error) {
        return (
            <View style={styles.container}>
                <ReloadIcon load={load} />
                <Text style={{textAlign:"center"}}>{error}</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
    else{
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
                <StatusBar style="auto" />
            </View>
        )
    }
        
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    main: {
        justifyContent: "center",
        flex: 1,
    },
});
