import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QuizQuestion = ({question}) => {
  return (
    <View>
      <Text>{question}</Text>
    </View>
  );
};

export default QuizQuestion;

const styles = StyleSheet.create({});
