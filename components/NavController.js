import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLogIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLogIn = true;
  //const logIn = useLogIn();
  //const logOut = useLogOut();

  return (
    <View style={{ flex: "1" }}>
      {isLogIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
