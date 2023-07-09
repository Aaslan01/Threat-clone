import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles, {colors} from '../assets/css/style';
import {nameImageType} from '../utils/staticData';
import ThreeDotsSVG from '../assets/svgs/ThreeDotsSVG';
import PostButton from './PostButton';

interface PostContainerProps {
  text: string;
  title: string;
  image: any;
  likes: number;
  replies: number;
}

const PostContainer = ({
  text,
  title,
  image,
  likes,
  replies,
}: PostContainerProps) => {
  return (
    <View style={[styles.w100]}>
      <View style={[styles.ph16, styles.fdr]}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            resizeMode: 'center',
          }}
          source={image}
        />
        <Text
          style={[
            styles.ml12,
            {color: 'white', fontSize: 14, fontWeight: '600'},
          ]}>
          {title}
        </Text>
        <View
          style={[
            styles.fdr,
            styles.center,
            {position: 'absolute', right: 16},
          ]}>
          <Text
            style={{
              color: colors?.secondaryText,
              fontSize: 14,
              fontWeight: '600',
              marginRight: 10,
            }}>
            46m
          </Text>
          <ThreeDotsSVG />
        </View>
      </View>
      <View style={{width: '82%', alignSelf: 'flex-end', marginRight: 16}}>
        {text != '' && (
          <Text
            style={{
              marginTop: -10,
              marginBottom: 14,
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: 'white',
              width: '80%',
              lineHeight: 20,
            }}>
            {text}
          </Text>
        )}
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            height: 300,
            marginTop: -4,
            borderRadius: 16,
          }}
          source={image}
        />
        <PostButton />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#6B6B6B',
            paddingLeft: 5,
            marginTop: 4,
          }}>
          {replies} replies {likes} likes
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.4,
          marginVertical: 20,
          backgroundColor: colors.grey1,
        }}
      />
    </View>
  );
};

export default PostContainer;
