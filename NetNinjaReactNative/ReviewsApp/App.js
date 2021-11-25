import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from "./shared/Header";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  const Drawer = createDrawerNavigator();
function AboutDrawer(){
  return (
    
      <Drawer.Navigator 
      
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f45',
          // height:80
        },
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}

      
      >
        <Drawer.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Home",
          // headerShown: false,
          headerTitle: () => <Header title="Home" />
        }}
        
        />
        <Drawer.Screen name="About" component={About} options={{
         
          // headerShown: false,
          headerTitle: () => <Header title="About"/>
          
        }} />
      </Drawer.Navigator>
    
    
  )
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    const Stack = createNativeStackNavigator();
    

    return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f45',
            height:60
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
          
          
          
        }}

      >
        <Stack.Screen  name="Home" component={AboutDrawer}  />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen  name="ReviewDetails" component={ReviewDetails}
        options={{
          headerShown: true,
          // headerTitle: () => <Header title="Review Details"/>
        }}
        />
      </Stack.Navigator>
     
    </NavigationContainer>
    
      
    );
  
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
