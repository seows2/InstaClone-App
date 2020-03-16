import React from "react";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import MessageLink from "../../components/MessagesLink";

const Stack = createStackNavigator();

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const Home = () => {
  return (
    <View>
      <Text>홈</Text>
    </View>
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <MessageLink />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
