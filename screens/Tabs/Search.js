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

const Search = () => (
  <View>
    <Text>Search</Text>
  </View>
);

const SearchStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName={"Search"}>
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default SearchStack;
