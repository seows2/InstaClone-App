import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLogIn, useLogIn, useLogOut } from "../AuthContext";

export default () => {
  const isLogIn = useIsLogIn();
  const logIn = useLogIn();
  const logOut = useLogOut();
  console.log(isLogIn, logIn, logOut);

  return (
    <View style={{ flex: "1", justifyContent: "center", alignItems: "center" }}>
      {isLogIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>로그아웃</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>로그인</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
