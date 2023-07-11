import {View, Text, ScrollView, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import styles, {colors} from '../assets/css/style';
import SearchIcon from '../assets/svgs/SearchIcon';
import FollowContainer from '../components/FollowContainer';
import {followData} from '../utils/staticData';

const Search = () => {
  return (
    <SafeAreaView style={[styles.ContainerBlack]}>
      <ScrollView>
        <Text
          style={[
            styles.ph16,
            {fontSize: 30, color: '#fff', fontWeight: '700'},
          ]}>
          Search
        </Text>
        <View
          style={[
            styles.mb10,
            {
              marginHorizontal: '4%',
              flexDirection: 'row',
              backgroundColor: colors.secondaryText,
              paddingHorizontal: 10,
              borderRadius: 4,
              width: '92%',
            },
          ]}>
          <SearchIcon
            fill={colors.grey3}
            style={{marginTop: 6}}
            height={16}
            width={16}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.grey3}
            style={{
              height: 30,
              padding: 0,
              paddingHorizontal: 10,
              paddingBottom: 6,
              fontSize: 18,
              color: colors.grey2,
            }}
          />
        </View>
        {followData.map(item => (
          <FollowContainer
            title={item?.title}
            text={item?.text}
            image={item?.image}
            followers={item?.followers}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
