import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/colors';

const NextBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
      <Text style={styles.text}>NextBtn</Text>
    </TouchableOpacity>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '600',
  },
});
