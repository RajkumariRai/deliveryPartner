import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './login/LoginScreen';
import DashBoard from './Components/Dashboard/DashBoard';
import { SplashScreen } from './screens/SplashScreen';
import SignUp from './signUp/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
         name="splashscreen"
         component={SplashScreen}
         options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
         name="signup"
         component={SignUp}
         options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
