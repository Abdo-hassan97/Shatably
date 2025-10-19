import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SplashImage from '../assets/images/Splash.png'; 

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
