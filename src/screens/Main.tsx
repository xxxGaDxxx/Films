import React from 'react';
import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};
