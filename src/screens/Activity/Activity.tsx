import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles, {colors} from '../../assets/css/style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTab from './AllTab';
import RepliesTab from './RepliesTab';
import MentionsTab from './MentionsTab';
import VerificationsTab from './VerificationsTab';
const Tab = createMaterialTopTabNavigator();

const Activity = () => {
  const getTabOptions = (text: string) => ({
    tabBarLabel: ({focused}: any) => {
      return (
        <View
          style={{
            // marginTop: -16,
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 80,
            height: 30,
            borderRadius: 4,
            backgroundColor: focused ? '#fff' : colors.primaryBlack,
            borderColor: focused ? 'transparent' : colors.secondaryText,
            borderWidth: 1,
          }}>
          <Text
            style={[
              !focused && {
                fontSize: 14,
                // fontFamily: 'Poppins-SemiBold',
                fontWeight: '800',
                color: '#fff',
              },
              focused && {
                fontSize: 14,
                // fontFamily: 'Poppins-SemiBold',
                fontWeight: '800',
                color: colors.primaryBlack,
              },
            ]}>
            {text}
          </Text>
        </View>
      );
    },
  });

  return (
    <SafeAreaView style={[styles.flex1]}>
      <ScrollView>
        <Text
          style={[
            styles.ph16,
            {fontSize: 30, color: '#fff', fontWeight: '700'},
          ]}>
          Activity
        </Text>
        <Tab.Navigator
          initialRouteName={'All'}
          screenOptions={{
            tabBarStyle: {
              height: 50,
              backgroundColor: colors.primaryBlack,
            },
            tabBarIndicatorStyle: {
              backgroundColor: colors.primaryBlack,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              textTransform: 'capitalize',
              opacity: 1,
            },
            tabBarPressOpacity: 0.4,
            tabBarActiveTintColor: '#37474F',
            tabBarInactiveTintColor: '#737678',
            // tabBarScrollEnabled: true,
            lazy: true,
            // lazyPreloadDistance: 0,
          }}>
          <Tab.Screen
            name="All"
            component={AllTab}
            options={getTabOptions(`All`)}
          />
          <Tab.Screen
            name="Replies"
            component={RepliesTab}
            options={getTabOptions(`Replies`)}
          />
          <Tab.Screen
            name="Mentions"
            component={MentionsTab}
            options={getTabOptions(`Mentions`)}
          />
          <Tab.Screen
            name="Verification"
            component={VerificationsTab}
            options={getTabOptions(`Verified`)}
          />
        </Tab.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
