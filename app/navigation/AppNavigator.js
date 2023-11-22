import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";

import HomeNavigation from "./HomeNavigation";
import About from "./../screens/About/About";
import Terms from "./../screens/Terms/Terms";
import ExchangeRate from "../components/generic/ExchangeRate/ExchangeRate";
import Notifications from "../screens/Notifications/Notifications";
import UpdatePassword from "../screens/UpdatePassword/UpdatePassword";
import UpdateAccount from "../screens/UpdateAccount/UpdateAccount";
import Payment from "../screens/Payment/Payment";
import Payout from "../screens/Payout/Payout";

const Stack = createNativeStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.primary,
    }}
    mode="modal"
  >
    <Stack.Screen
      name="Welcome"
      component={HomeNavigation}
      options={{
        headerRight: () => <ExchangeRate />,
      }}
    />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="Update Password" component={UpdatePassword} />
    <Stack.Screen name="Update Account" component={UpdateAccount} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="Payout" component={Payout} />
  </Stack.Navigator>
);

export default AppNavigator;
