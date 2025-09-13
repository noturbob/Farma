import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
}
