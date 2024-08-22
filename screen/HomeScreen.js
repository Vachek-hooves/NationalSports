import {StyleSheet, View, Dimensions} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';
import {IconBall} from '../components/icons';
import {MainBg} from '../components/layout';

const {height, width} = Dimensions.get('screen');
const MARGIN_TOP = height * 0.01;
const WIDTH = width * 0.2;

const HomeScreen = () => {
  return (
    // <BlueBg>
    //  <MainImageBg />
    <MainBg>
      <View style={{position: 'absolute', top: MARGIN_TOP, right: WIDTH}}>
        <IconAthlete />
      </View>
      <View>
        <IconBall screen={'GameScreen'}>GAME</IconBall>
        <IconBall>RULES</IconBall>
      </View>
    </MainBg>
    // </BlueBg>
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
