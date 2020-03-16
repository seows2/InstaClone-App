import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TapNavigation from "./TapNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavigation = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation.Navigator
        initialRouteName="TapNavigation"
        headerMode="none"
        mode="modal"
      >
        <MainNavigation.Screen name="TapNavigation" component={TapNavigation} />
        <MainNavigation.Screen
          name="PhotoNavigation"
          component={PhotoNavigation}
        />
        <MainNavigation.Screen
          name="MessageNavigation"
          component={MessageNavigation}
        />
      </MainNavigation.Navigator>
    </NavigationContainer>
  );
};
