import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles, {colors} from '../assets/css/style';
import GlobeSVG from '../assets/svgs/GlobeSVG';
import Instagram from '../assets/svgs/Instagram';
import Lines from '../assets/svgs/Lines';

const Profile = () => {
  const ImageView = () => {
    return (
      <View style={[styles.mt10, styles.fdr]}>
        <View style={styles.fdr}>
          <Image
            style={{
              height: 22,
              width: 22,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={require('../assets/images/post1.jpeg')}
          />
          <Image
            style={{
              height: 22,
              width: 22,
              marginLeft: -8,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={require('../assets/images/post2.jpeg')}
          />
          <Image
            style={{
              height: 22,
              width: 22,
              marginLeft: -8,
              // resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={require('../assets/images/post4.jpeg')}
          />
        </View>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 14,
            fontWeight: '400',
          }}>
          {'   '}64 Followers - linktr.ee/a.aslan_47
        </Text>
      </View>
    );
  };
  const buttons = () => {
    return (
      <View style={[styles.fdrjcsb, styles.mt10]}>
        <TouchableOpacity
          style={{
            width: '48%',
            paddingVertical: 8,
            borderColor: colors.secondaryText,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              // fontFamily: 'Poppins-SemiBold',
              fontWeight: '800',
              color: '#fff',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            paddingVertical: 8,
            borderColor: colors.secondaryText,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              // fontFamily: 'Poppins-SemiBold',
              fontWeight: '800',
              color: '#fff',
            }}>
            Share Profle
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.ContainerBlack}>
      <ScrollView
        contentContainerStyle={[
          styles.ContainerBlack,
          styles.ph12,
          styles.pt12,
        ]}>
        <View style={styles.fdrjcsb}>
          <GlobeSVG />
          <View style={[styles.fdrjcsb, styles.w10]}>
            <Instagram />
            <Lines />
          </View>
        </View>
        <View>
          <Image
            style={{
              height: 70,
              width: 70,
              resizeMode: 'contain',
              borderRadius: 100,
              position: 'absolute',
              right: 8,
              top: 20,
            }}
            source={require('../assets/images/post2.jpeg')}
          />
          <Text
            style={{
              marginTop: 20,
              color: '#fff',
              fontSize: 22,
              fontWeight: '600',
            }}>
            Ali Sher Khan
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: '#fff',
              fontSize: 14,
              fontWeight: '400',
            }}>
            a.aslan_47{' '}
            <Text
              style={{
                color: colors.secondaryText,
                padding: 10,
                fontSize: 12,
                fontWeight: '400',
              }}>
              {' '}
              threads.net{' '}
            </Text>
          </Text>
        </View>
        <Text style={[style.bio, {marginTop: 14}]}>
          I`m a man like an eye in an eye
        </Text>
        <Text style={style.bio}>{'  '}: UET 22</Text>
        <Text style={style.bio}>#freepalestine $freekashmir</Text>
        {ImageView()}
        {buttons()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const style = StyleSheet.create({
  bio: {
    marginTop: 4,
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
});
