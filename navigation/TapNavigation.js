import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          }
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
