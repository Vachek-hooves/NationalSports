import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {Color} from '../../constants/colors';

const QuizProgress = ({progress, length}) => {
  const animateProgress = progress.interpolate({
    inputRange: [0, length],
    outputRange: ['0%', '100%'],
  });
  //   console.log(progress);
  return (
    <View style={styles.progressContainer}>
      <Animated.View
        style={[styles.progressBar, {width: animateProgress}]}></Animated.View>
    </View>
  );
};

export default QuizProgress;

const styles = StyleSheet.create({
  progressContainer: {
    height: 35,
    borderRadius: 18,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: Color.milk,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  progressBar: {
    borderRadius: 12,
    backgroundColor: Color.blue,
    height: 15,
  },
});
