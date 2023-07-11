import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles, {colors} from '../assets/css/style';

interface FollowContainerProps {
  text: string;
  title: string;
  image: any;
  followers: string;
}
const FollowContainer = ({
  text,
  title,
  image,
  followers,
}: FollowContainerProps) => {
  const [follow, setFollow] = useState<boolean>(false);
  console.log('====================================');
  return (
    <TouchableOpacity style={[styles.fdr]}>
      <View style={{width: '12%', paddingLeft: 16}}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: 'center',
          }}
          source={image}
        />
      </View>

      <View style={{paddingLeft: 20, width: '88%'}}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#FFFFFF'}}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: colors.secondaryText,
          }}>
          {text}
        </Text>
        <Text style={{fontSize: 14, color: '#FFFFFF', marginTop: 10}}>
          {followers} followers
        </Text>

        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={[
            styles.center,
            styles.pv5,
            {
              borderWidth: 1,
              borderColor: colors.secondaryText,
              borderRadius: 8,
              position: 'absolute',
              right: "4%",
              width: '30%'
            },
          ]}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: follow ? colors.secondaryText : '#FFFFFF',
            }}>
            {follow ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 0.4,
            marginVertical: 10,
            backgroundColor: colors.grey1,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FollowContainer;
