import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Login from './src/components/LoginComponent';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, StackNavigator} from '@react-navigation/stack'
import DashBoard from './src/screens/DashBoard'
import * as Application from 'expo-application'

export default function App() {


  let devId = null
  Platform.OS==='android'?devId=Application.androidId:Application.getIosIdForVendorAsync().then(data=>{
    data=devId
  });
   
   
  const stack= createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
      
      <stack.Screen name='Login' component={Login}/>
      <stack.Screen name='DashBoard' component={DashBoard}
      options={{
        headerStyle:{
          backgroundColor:'#845460'
        }
      }}/>
    
    </stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5D5B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
