import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import HeartSVG from '../assets/svgs/HeartSVG';
import styles from '../assets/css/style';
import ShareSVG from '../assets/svgs/ShareSVG';
import PostSVG from '../assets/svgs/PostSVG';
import CommentSVG from '../assets/svgs/CommentSVG';

const PostButton = () => {
  const [heart, setHeart] = useState<boolean>(false);
  return (
    <View
      style={[
        styles.fdrjcsb,
        styles.mt4,
        styles.pl5,
        styles.mt10,
        {width: '34%'},
      ]}>
      <Pressable onPress={() => setHeart(!heart)}>
        <HeartSVG
          height={18}
          width={18}
          border={'#fff'}
          background={heart ? '#C94444' : ''}
        />
      </Pressable>
      <CommentSVG height={20} width={20} />
      <PostSVG />
      <ShareSVG height={20} width={20} />
    </View>
  );
};

export default PostButton;
