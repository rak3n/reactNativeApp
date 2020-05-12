import React,{useEffect} from 'react';
import {View} from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-native-paper';

import Home from './screens/Screen1'


const App = () => { 

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <View style={{flex:1,width:'100%',height:100,backgroundColor:'white'}}>
    <Provider >
      <Home></Home>
    </Provider>
    </View>
  );

};

export default App;
