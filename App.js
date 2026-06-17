import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from './screens/paginaInicial.js';
import ScanRosto from './screens/scanRosto.js';
import Calendario from './screens/calendario.js';
import Frequencia from './screens/frequencia.js';
import JustificarFalta from './screens/justificarFalta.js';
import Login from './screens/login.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function FrequenciaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FrequenciaHome" component={Frequencia} />
      <Stack.Screen name="JustificarFalta" component={JustificarFalta} />
    </Stack.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="PaginaInicial">
      <Drawer.Screen name="PaginaInicial" component={PaginaInicial} />
      <Drawer.Screen name="Scanner de Rosto" component={ScanRosto} />
      <Drawer.Screen name="Calendario" component={Calendario} />
      <Drawer.Screen name="Frequencia" component={FrequenciaStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}