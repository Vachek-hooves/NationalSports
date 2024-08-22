import {StyleSheet, Text, View} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';

const MainScreen = () => {
  return (
    <MainImageBg>
      <BlueBg></BlueBg>
    </MainImageBg>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
