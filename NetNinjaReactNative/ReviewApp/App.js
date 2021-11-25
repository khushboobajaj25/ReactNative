import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import About from './screens/About';

import AppLoading from "expo-app-loading";
import Navigator from './routes/HomeStack';

const getFont = ()=>{
   Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(fontLoaded){
  return (
    <Navigator/> 
    // <Home/>
  );
}
else{
  // return(<Text>HI</Text>)
  return( 
        <AppLoading 
        startAsync={getFont} 
        onFinish={()=>setFontLoaded(true)}
        onError={() => console.log("error")}
        />
  )
}
}


