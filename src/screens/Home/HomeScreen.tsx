import React from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootDetailsParamsList} from "../types";
import {DetailsScreen} from "../Details/DetailsScreen";
import {AllFilmsScreen} from "./AllFilmsScreen";

const Stack = createNativeStackNavigator<RootDetailsParamsList>();

export const HomeScreen = () => {

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'AllFilms'} component={AllFilmsScreen}/>
        <Stack.Screen name={'Details'} component={DetailsScreen}/>
      </Stack.Navigator>
    </View>
  );
};
