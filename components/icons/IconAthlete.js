import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const IconAthlete = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AthleteScreen')}>
      <Image
        source={require('../../assets/img/icons/athletics.png')}
        style={{
          width: '100%',
          tintColor: Color.milk,
          height: 40,
          width: 40,
          alignSelf: 'flex-end',
          marginRight: 40,
          marginTop: 40,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconAthlete;

const styles = StyleSheet.create({});
