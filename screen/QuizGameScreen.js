import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import {useSportContext} from '../store/sport_context';

const QuizGameScreen = ({route}) => {
  const {quiz} = useSportContext();
  const levelId = route.params;
  const thisLevel = quiz.find(item => item.id === levelId);

  return (
    <>
      <MainBg>
        <IconReturn />
      </MainBg>
    </>
  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({});
