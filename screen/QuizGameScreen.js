import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import useQuizGame from '../hooks/useQuizGame';
import {useSportContext} from '../store/sport_context';
import {Color} from '../constants/colors';

const QuizGameScreen = ({route}) => {
  const levelId = route.params;
  const {quiz} = useSportContext();
  const {
    validationCheck,
    nextQuestion,
    restartHandle,
    generalState,
    thisLevel,
    questionBox,
  } = useQuizGame(levelId);
  const {
    currentIndex,
    currentOption,
    correctOption,
    isOptionOff,
    score,
    nextBtnActive,
  } = generalState;

  const question = questionBox[currentIndex].question || '';
  const options = questionBox[currentIndex].options || [];


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
