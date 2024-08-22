import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';
import {useSportContext} from '../store/sport_context';
import {IconBall} from '../components/icons';
import {Color} from '../constants/colors';

const HomeScreen = () => {
  const {quiz, guess} = useSportContext();
  console.log(quiz, guess);
  return (
    // <MainImageBg>
    <BlueBg>
      <MainImageBg />
      <IconAthlete />
      <View style={styles.container}>
        {/* <View style={{flex:1}}> */}
        <View>
          <IconBall screen={'GameScreen'}>GAME</IconBall>
          <IconBall>RULES</IconBall>
        </View>
        {/* <Text style={{fontWeight: '800', fontSize: 46, color: Color.milk}}>
            a;ldfs;lasdj;lasdka;ldkfa;lsfk;alsdk
          </Text> */}
        {/* </View> */}
      </View>
    </BlueBg>
    // </MainImageBg>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 60,
    justifyContent: 'center',
    height: '100%',
  },
});
