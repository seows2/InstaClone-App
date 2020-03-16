import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import LogIn from "../screens/Auth/LogIn";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AuthNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
        <AuthNavigation.Screen name="AuthHome" component={AuthHome} />
        <AuthNavigation.Screen name="LogIn" component={LogIn} />
        <AuthNavigation.Screen name="Confirm" component={Confirm} />
        <AuthNavigation.Screen name="SignUp" component={SignUp} />
      </AuthNavigation.Navigator>
    </NavigationContainer>
  );
};
