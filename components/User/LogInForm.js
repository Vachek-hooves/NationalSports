import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconForm} from '../icons';
import {Color} from '../../constants/colors';

const LogInForm = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <View
        style={{backgroundColor: Color.milk, padding: 10, borderRadius: 12}}>
        <Text>LogInForm</Text>
        <IconForm />
      </View>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({});
