import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {MainBg} from '../components/layout';
import {IconBall} from '../components/icons';

const GameModeScreen = () => {
  return (
    <MainBg>
      {/* <View style={{justifyContent: 'center', height: '100%'}}> */}
        <IconBall >QUIZ</IconBall>
        <IconBall >QUESS</IconBall>
      {/* </View> */}
    </MainBg>
  );
};

export default GameModeScreen;

const styles = StyleSheet.create({});
