/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabScreen from "./src/navigation/BottomTab";
const Stack = createNativeStackNavigator();

// Screens

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          initialRouteName="HomeDrawer"
          // screenOptions={({navigation}) => ({
          //   header: props => (
          //     <Back onPress={navigation.goBack} {...props} />
          //   ),
          //   headerBackVisible: false,
          //   headerBackTitleVisible: true,
          // })}
        >
          <Stack.Screen
            name="HomeDrawer"
            component={MainTabScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;
