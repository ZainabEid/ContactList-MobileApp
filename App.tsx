import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import HM from "./screens/HM"
import AddContact from "./components/AddContact";

const Stack = createStackNavigator();

export default class App extends Component {

  render(){
    return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="HomeScreen" > 
        <Stack.Screen 
          name="HomeScreen" 
          component={HM}
        />

        <Stack.Screen 
          name="AddContact" 
          component={AddContact}
        />

      </Stack.Navigator>
    </NavigationContainer>
      	

      
    );
  
  }
  
}

const styles = StyleSheet.create({
 
});
