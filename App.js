import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login/LoginScreen';
import DashBoard from './mainScreen/DashBoard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        
        />
         <Stack.Screen
          name="dashboard"
          component={DashBoard}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
