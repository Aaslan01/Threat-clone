import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import HeartSVG from '../assets/svgs/HeartSVG';
import styles from '../assets/css/style';
import ShareSVG from '../assets/svgs/ShareSVG';
import PostSVG from '../assets/svgs/PostSVG';

const PostButton = () => {
  const [heart, setHeart] = useState<boolean>(false);
  return (
    <View style={[styles.fdrac, styles.mt4]}>
      <Pressable onPress={() => setHeart(!heart)}>
        <HeartSVG height={18} width={18} background={heart ? '#C94444' : ''} />
      </Pressable>
      <PostSVG />
      <ShareSVG height={20} width={20} />
    </View>
  );
};

export default PostButton;
