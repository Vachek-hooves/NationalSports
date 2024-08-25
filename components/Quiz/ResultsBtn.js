import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../constants/colors';

const ResultsBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>ResultsBtn</Text>
    </TouchableOpacity>
  );
};

export default ResultsBtn;

const styles = StyleSheet.create({
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '600',
  },
});
