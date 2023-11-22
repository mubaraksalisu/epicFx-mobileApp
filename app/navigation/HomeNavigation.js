import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home";
import Investment from "../screens/Investment/Investment";
import Account from "../screens/Account/Account";
import Admin from "../screens/Admin/Admin";
import useMyContext from "./../hooks/useMyContext";

const Tab = createBottomTabNavigator();
const size = 30;

const HomeNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} mode="modal">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Invest Now"
      component={Investment}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="safe" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    {useMyContext() && (
      <Tab.Screen
        name="Admin"
        component={Admin}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="head" color={color} size={size} />
          ),
        }}
      />
    )}
  </Tab.Navigator>
);

export default HomeNavigation;
