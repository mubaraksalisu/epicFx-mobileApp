import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ForgotPassword from "./../screens/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.primary,
    }}
    mode="modal"
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="UserCheck" component={ForgotPassword} />
  </Stack.Navigator>
);

export default AuthNavigator;
