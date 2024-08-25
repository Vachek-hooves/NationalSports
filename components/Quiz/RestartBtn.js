import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../constants/colors';

const RestartBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>RestartBtn</Text>
    </TouchableOpacity>
  );
};

export default RestartBtn;

const styles = StyleSheet.create({
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '600',
  },
});
