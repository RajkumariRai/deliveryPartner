import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Auth/LoginScreen';
import DashBoard from './Components/Dashboard/DashBoard';
import {SplashScreen} from './screens/SplashScreen';
import SignUp from './Auth/SignUp';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/Profile/EditProfile';
import ForgetPassword from './Auth/ForgetPassword';
import ForgetPasswordOtp from './Auth/ForgotPasswordOtp';
import Orders from './Components/Orders/Orders';
import OrderAcceptReject from './Components/Orders/OrderAcceptReject';
import MapLocation from './Components/Orders/MapLocation';
import FliterCompletedOrder from './Components/Orders/FliterCompletedOrder';
import Setting from './Components/Settings/Setting';
import Notification from './Components/Notification/Notification';
import Sidebar from './Components/Navigation/Sidebar';

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
          name="forgetpassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgetpasswordotp"
          component={ForgetPasswordOtp}
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
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit-Profile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrdersAccpectReject"
          component={OrderAcceptReject}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapLocation"
          component={MapLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterCompletedOrder"
          component={FliterCompletedOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifcation"
          component={Notification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="sidebar"
          component={Sidebar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
