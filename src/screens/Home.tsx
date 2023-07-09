import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../assets/css/style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PostContainer from '../components/PostContainer';
import {postData} from '../utils/staticData';

const Home = () => {
  return (
    <View style={[styles.ContainerBlack]}>
      <Image
        style={{height: hp(6), width: hp(6), alignSelf: 'center'}}
        source={require('../assets/images/blackLogo.png')}
      />
      <ScrollView >
        {postData.map(item => (
          <PostContainer title={item?.title} text={item?.text} image={item?.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
