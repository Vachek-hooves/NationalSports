import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../constants/colors';

const ResultsBtn = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.text}>Results Screen</Text>
    </TouchableOpacity>
  );
};

export default ResultsBtn;

const styles = StyleSheet.create({
  btn: {borderWidth: 1, flex: 1, borderColor: Color.milk, borderRadius: 8},
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  btn: {
    borderWidth: 1,
    flex: 1,
    borderColor: Color.milk,
    borderRadius: 8,
    backgroundColor: Color.ocean,
    paddingVertical: 8,
  },
});