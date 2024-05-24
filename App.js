import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import ScannerPage from './ScannerPage';
import FirstPage from './FirstPage';
import FindPathPage from './FindPathPage';
import PathDetailsPage from './PathDetailsPage';
import FlightInfoPage from './FlightInfoPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen 
        name="FirstPage" 
        component={FirstPage} 
        options={{ title: 'Parcours Passager' }} 
      />
      <Drawer.Screen 
        name="FindPathPage" 
        component={FindPathPage} 
        options={{ title: 'Trouver le Chemin' }} 
      />
      <Drawer.Screen 
        name="FlightInfoPage" 
        component={FlightInfoPage} 
        options={{ title: 'Informations sur le Vol' }} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ScannerPage" 
          component={ScannerPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PathDetails" 
          component={PathDetailsPage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
