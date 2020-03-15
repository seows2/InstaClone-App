import React, { createContext, useContext, useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ isLogIn: isLogInProp, children }) => {
  const [isLogIn, setIsLogIn] = useState(isLogInProp);
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
  return (
    <AuthContext.Provider value={{ isLogIn, logUserIn, logUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLogIn = () => {
  const { isLogIn } = useContext(AuthContext);
  return isLogIn;
};

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};
