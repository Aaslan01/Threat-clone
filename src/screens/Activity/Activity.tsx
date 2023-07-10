import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/css/style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTab from './AllTab';
import RepliesTab from './RepliesTab';
import MentionsTab from './MentionsTab';
import VerificationsTab from './VerificationsTab';
const Tab = createMaterialTopTabNavigator();

const Activity = () => {
  return (
    <SafeAreaView style={[styles.ContainerBlack]}>
      <ScrollView>
        <Text
          style={[
            styles.ph16,
            {fontSize: 30, color: '#fff', fontWeight: '700'},
          ]}>
          Activity
        </Text>
        <Tab.Navigator>
          <Tab.Screen name="All" component={AllTab} />
          <Tab.Screen name="Replies" component={RepliesTab} />
          <Tab.Screen name="Mentions" component={MentionsTab} />
          <Tab.Screen name="Verification" component={VerificationsTab} />
        </Tab.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
