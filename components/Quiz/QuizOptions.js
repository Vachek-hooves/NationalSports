import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const QuizOptions = ({
  options,
  currentOption,
  onPress,
  disable,
  correctOption,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => onPress(item, index)}
            disabled={disable}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
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
    backgroundColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
});
