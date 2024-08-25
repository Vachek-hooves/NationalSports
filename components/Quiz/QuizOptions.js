import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/colors';

const QuizOptions = ({
  options,
  currentOption,
  onPress,
  disable,
  correctOption,
}) => {
  return (
    <View style={styles.container}>
      {options.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={styles.option}
            onPress={() => onPress(item)}
            disabled={disable}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: Color.milk,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: Color.blue,
    fontSize: 20,
    fontWeight: '600',
   
  },
});
