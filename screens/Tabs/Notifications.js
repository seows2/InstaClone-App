import React from "react";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;
const Stack = createStackNavigator();

const Notification = () => (
  <View>
    <Text>알람</Text>
  </View>
);

const NotiStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName={"Notification"}>
    <Stack.Screen name="Notification" component={Notification} />
  </Stack.Navigator>
);

export default NotiStack;
