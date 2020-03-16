import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tabs = createMaterialTopTabNavigator();

const PhotoTabs = () => {
  return (
    <Tabs.Navigator tabBarPosition="bottom">
      <Tabs.Screen name="SelectPhoto" component={SelectPhoto} />
      <Tabs.Screen name="TakePhoto" component={TakePhoto} />
    </Tabs.Navigator>
  );
};

const StackTabs = createStackNavigator();

export default () => {
  return (
    <StackTabs.Navigator headerMode="none">
      <StackTabs.Screen
        options={{ title: "" }}
        name="PhotoTabs"
        component={PhotoTabs}
      />
      <StackTabs.Screen name="UploadPhoto" component={UploadPhoto} />
    </StackTabs.Navigator>
  );
};
