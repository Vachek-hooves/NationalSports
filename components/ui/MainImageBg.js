import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const MainImageBg = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/mainbg/Labron.jpg')}
      resizeMode="cover"
      style={{flex: 1}}
      imageStyle={styles.imageBackground}>
      {children}
    </ImageBackground>
  );
};

export default MainImageBg;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    opacity: 0.6,
  },
});
