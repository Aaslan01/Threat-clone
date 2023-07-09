import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import styles, {colors} from '../assets/css/style';
import Home from '../screens/Home';
import Activity from '../screens/Activity';
import Search from '../screens/Search';
import Write from '../screens/Write';
import Profile from '../screens/Profile';
import HomeSVG from '../assets/svgs/HomeSVG';
import SearchSVG from '../assets/svgs/SearchSVG';
import WriteSVG from '../assets/svgs/WriteSVG';
import HeartSVG from '../assets/svgs/HeartSVG';
import SettingSVG from '../assets/svgs/SettingSVG';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.primaryBlackBG,
          Platform.OS === 'ios' && styles.pv15,
          Platform.OS === 'ios' && styles.pt30,
          {height: hp(7), borderColor: colors?.primaryBlack},
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                <HomeSVG />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={{selectedArea: []}}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                <SearchSVG />
              </View>
            );
          },
        })}
      />

      <Tab.Screen
        name="Write"
        component={Write}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                <WriteSVG />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                <HeartSVG />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={styles.center}>
                <SettingSVG />
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}
