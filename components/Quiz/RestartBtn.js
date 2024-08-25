import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../constants/colors';

const RestartBtn = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.text}>Restart</Text>
    </TouchableOpacity>
  );
};

export default RestartBtn;

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
