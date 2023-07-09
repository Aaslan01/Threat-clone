import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../assets/css/style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PostContainer from '../components/PostContainer';
import {postData} from '../utils/staticData';

const Home = () => {
  return (
    <View style={[styles.ContainerBlack]}>
      <ScrollView >
      <Image
        style={{height: hp(6), width: hp(6), alignSelf: 'center'}}
        source={require('../assets/images/blackLogo.png')}
      />
        {postData.map(item => (
          <PostContainer title={item?.title} text={item?.text} image={item?.image} likes={item?.likes} replies={item?.replies}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
