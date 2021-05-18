import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {homeScreen,devData,chocovaniScreen,cocoazuScreen,cinnamapScreen} from './components/screens'


const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer initialRouteName='login' detachInactiveScreens>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={homeScreen} />
        <Drawer.Screen name="Chocola y Vanilla" component={chocovaniScreen} />
        <Drawer.Screen name="Coconut y Azuki" component={cocoazuScreen} />
        <Drawer.Screen name="Cinnamon y Maple" component={cinnamapScreen} />
        <Drawer.Screen name="Datos del Desarrollador" component={devData} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};
