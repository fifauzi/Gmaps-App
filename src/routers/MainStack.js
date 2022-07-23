import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Maps from '../screens/Maps';
import qrCode from '../screens/qrCode';
import crasandAnalytic from '../screens/crasandAnalytics';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="qrCode" component={qrCode} />
    </Stack.Navigator>
  );
};
const iconBar = (nameIcon, color, size) => {
  return <Feather name={nameIcon} color={color} size={size} />;
};
const Tabs = () => {
  return (
    <Tab.Navigator screenOtions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>Gmaps</Text>
          ),
          tabBarLabel: 'Maps',
          tabBarIcon: ({color, size}) => iconBar('map-pin', color, size),
        }}
        name="Maps"
        component={Maps}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>Qr Code</Text>
          ),
          tabBarLabel: 'qrCode',
          tabBarIcon: ({color, size}) => iconBar('camera', color, size),
        }}
        name="qrCode"
        component={qrCode}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>CA Test</Text>
          ),
          tabBarLabel: 'crasandAnalytic',
          tabBarIcon: ({color, size}) => iconBar('bar-chart-2', color, size),
        }}
        name="crasandAnalytic"
        component={crasandAnalytic}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
