import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../constants/colors';

const QuizQuestion = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
    </View>
  );
};

export default QuizQuestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.milk,
    padding: 10,
    borderRadius: 12,
    width: '100%',
    height: 100,
  },
  text: {
    color: Color.blue,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});
