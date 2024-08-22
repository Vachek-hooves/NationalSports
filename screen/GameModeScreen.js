import {View} from 'react-native';
import {MainBg} from '../components/layout';
import {IconBall, IconReturn} from '../components/icons';

const GameModeScreen = () => {
  return (
    <MainBg>
      <View>
        <IconBall screen={'QuizListScreen'}>QUIZ</IconBall>
        <IconBall screen={'GuessListScreen'}>QUESS</IconBall>
      </View>
      <IconReturn />
    </MainBg>
  );
};

export default GameModeScreen;
