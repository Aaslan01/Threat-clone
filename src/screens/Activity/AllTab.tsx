import {View, Text} from 'react-native';
import React from 'react';
import {followData} from '../../utils/staticData';
import FollowContainer from '../../components/FollowContainer';
import styles from '../../assets/css/style';

const AllTab = () => {
  return (
    <View style={styles.ContainerBlack}>

      {followData.map(item => (
        <FollowContainer
          title={item?.title}
          text={item?.text}
          image={item?.image}
          followers={item?.followers}
        />
      ))}
    </View>
  );
};

export default AllTab;
