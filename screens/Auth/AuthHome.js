import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Text>인증</Text>
    <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
      <Text>로그인으로</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <Text>가입으로</Text>
    </TouchableOpacity>
  </View>
);
