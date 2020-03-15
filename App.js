import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import {
  TouchableOpacity,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { persistCache } from "apollo-cache-persist";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import apolloClientOption from "./apollo";
import theme from "./theme";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLogIn, setIsLogIn] = useState(null);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/instagram_logo.svg")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...apolloClientOption
      });
      const isLogIn = await AsyncStorage.getItem("isLogIn");
      if (isLogIn === null || isLogIn === "false") {
        setIsLogIn(false);
      } else {
        setIsLogIn(true);
      }
      setLoaded(true);
      setClient(client);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);

  const logUserIn = async () => {
    try {
      await AsyncStorage.setItem("isLogIn", "true");
      setIsLogIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLogIn", "false");
      setIsLogIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return loaded && client && isLogIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {isLogIn === true ? (
            <TouchableOpacity onPress={logUserOut}>
              <Text>로그아웃</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={logUserIn}>
              <Text>로그인 </Text>
            </TouchableOpacity>
          )}
        </View>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}
