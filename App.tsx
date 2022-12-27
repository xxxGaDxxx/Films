import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStackParamsLists} from "./src/screens/types";
import {SearchScreen} from "./src/screens/Search/SearchScreen";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {WatchListScreen} from "./src/screens/WatchList/WatchListScreen";
import {HomeScreen} from "./src/screens/Home/HomeScreen";


const Tab = createBottomTabNavigator<RootStackParamsLists>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom', 'top']} style={{flex: 1}}>
        <NavigationContainer>
          <View style={styles.container}>
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name={'Home'} component={HomeScreen}/>
              <Tab.Screen name={'Search'} component={SearchScreen}/>
              <Tab.Screen name={'WatchList'} component={WatchListScreen}/>
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242a32',
  },
});
