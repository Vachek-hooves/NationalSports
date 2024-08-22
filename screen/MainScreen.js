import {StyleSheet, Text, View} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';

const MainScreen = () => {
  return (
    <MainImageBg>
      <BlueBg>
        <View>
          <IconAthlete />
        </View>
      </BlueBg>
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
