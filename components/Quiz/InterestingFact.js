import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {QuizBtn} from '../ui';
import {Color} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const TOP = height * 0.1;
const RIGHT = width * 0.15;

const InterestingFact = ({visible, close, bgImage, fact}) => {
  //   console.log(fact);
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <ImageBackground
        style={{flex: 1, backgroundColor: Color.blue, padding: 10}}
        source={bgImage}
        imageStyle={{opacity: 0.3}}
        resizeMode="cover">
        <SafeAreaView
          style={{
            height: '80%',
            justifyContent: 'center',
            // alignItemsL: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              position: 'absolute',
              top: TOP,
              left: RIGHT,
              color: Color.milk,
              fontWeight: '700',
              fontSize: 28,
              textAlign: 'center',
            }}>
            INTERESTING FACT
          </Text>
          <View
            style={{
              backgroundColor: Color.milk,
              padding: 15,
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 28,
                color: Color.blue,
                textAlign: 'center',
              }}>
              {fact}
            </Text>
          </View>
        </SafeAreaView>
        <View style={{height: 70}}>
          <QuizBtn onPress={close}>CLOSE</QuizBtn>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default InterestingFact;

const styles = StyleSheet.create({});
