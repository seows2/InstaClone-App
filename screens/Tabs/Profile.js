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

const Profile = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName={"Profile"}>
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default ProfileStack;
