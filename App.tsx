import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStackParamsLists} from "./src/screens/types";
import {SearchScreen} from "./src/screens/Search/SearchScreen";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {WatchListScreen} from "./src/screens/WatchList/WatchListScreen";
import {HomeScreen} from "./src/screens/Home/HomeScreen";
import {SearchSvg} from "./src/assets/svg/SearchSvg";
import {SearchFocusedSvg} from "./src/assets/svg/SearchFocusedSvg";


const Tab = createBottomTabNavigator<RootStackParamsLists>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom', 'top']} style={{flex: 1}}>
        <NavigationContainer>
          <View style={styles.container}>
            {/*<Tab.Navigator screenOptions={{headerShown: false}}>*/}
            <Tab.Navigator
              screenOptions={({route}) => ({
                  tabBarIcon: ({focused}) => {
                    if (route.name === 'Home') {
                      return focused ? <SearchFocusedSvg/> : <SearchSvg/>
                    }
                    if (route.name === 'Search') {
                      return focused ? <SearchFocusedSvg/> : <SearchSvg/>
                    }
                    if (route.name === 'WatchList') {
                      return focused ? <SearchFocusedSvg/> : <SearchSvg/>
                    }
                  },

                  tabBarActiveTintColor: '#0295e3',

                  headerShown: false,

                  tabBarStyle: {
                    backgroundColor: '#242a32',
                    borderTopWidth: 1,
                    borderTopColor: '#0295e3'

                  },

                  tabBarLabelStyle: {
                    fontSize: 12,
                  }
                }
              )}
            >
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
