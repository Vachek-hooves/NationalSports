import {StyleSheet, View, Dimensions} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';
import {IconBall} from '../components/icons';

const {height} = Dimensions.get('screen');
const MARGIN_TOP = height * 0.1;

const HomeScreen = () => {
  return (
    <BlueBg>
      <MainImageBg />
      <IconAthlete />
      <View style={styles.container}>
        <View>
          <IconBall screen={'GameScreen'}>GAME</IconBall>
          <IconBall>RULES</IconBall>
        </View>
      </View>
    </BlueBg>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 60,
    height: height,
    marginTop: MARGIN_TOP,
  },
});
