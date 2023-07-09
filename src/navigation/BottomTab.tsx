import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import styles, {colors} from '../assets/css/style';
import Home from '../screens/Home';
import Azkar from '../screens/Azkar';
import Prayer from '../screens/Prayer';
import More from '../screens/More';
import Quran from '../screens/Quran';

const Tab = createBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.bggreyy2,
          Platform.OS === 'ios' && styles.pv15,
          Platform.OS === 'ios' && styles.pt30,
          {height: 84, borderTopWidth: 2, borderColor: colors.primary},
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                {/* <KabahIcon /> */}
                <Text style={styles.bottomTabText}>Home</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Prayer"
        component={Prayer}
        initialParams={{selectedArea: []}}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                {/* <Vault /> */}
                <Text style={styles.bottomTabText}>Search</Text>
              </View>
            );
          },
        })}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                {/* <MoreIcon /> */}
                <Text style={styles.bottomTabText}>Write</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Azkar"
        component={Azkar}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                {/* <TasbiIcon /> */}
                <Text style={styles.bottomTabText}>Heart</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Quran"
        component={Quran}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                {/* <QuranIcon /> */}
                <Text style={styles.bottomTabText}>Setting</Text>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}
