import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/css/style'

const Home = () => {
  return (
    <ScrollView
    contentContainerStyle={styles.ContainerBlack}
    >
      <Text>Home</Text>
    </ScrollView>
  )
}

export default Home