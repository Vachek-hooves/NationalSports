import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {MainBg} from '../components/layout';
import {IconBall, IconReturn} from '../components/icons';

const {height, width} = Dimensions.get('screen');
const MARGIN_BOTTOM = height * 0.1;
const RIGHT_MARGIN = width * 0.1;

const GameModeScreen = () => {
  return (
    <MainBg>
      <View>
        <IconBall>QUIZ</IconBall>
        <IconBall>QUESS</IconBall>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: MARGIN_BOTTOM,
          right: RIGHT_MARGIN,
        }}>
        <IconReturn />
      </View>
    </MainBg>
  );
};

export default GameModeScreen;

const styles = StyleSheet.create({});
