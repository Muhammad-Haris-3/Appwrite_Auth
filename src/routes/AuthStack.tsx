import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from '../screens/Signup';
import { Login } from '../screens/Login';

export type AuthStackParamsList = {
  Signup: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamsList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
