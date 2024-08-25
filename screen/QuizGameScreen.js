import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import useQuizGame from '../hooks/useQuizGame';
import {useSportContext} from '../store/sport_context';
import {Color} from '../constants/colors';
import {
  NextBtn,
  QuizOptions,
  QuizQuestion,
  ResultsBtn,
} from '../components/Quiz';

const QuizGameScreen = ({route, navigation}) => {
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
    showResultsButton,
  } = generalState;

  const question = questionBox[currentIndex].question || '';
  const options = questionBox[currentIndex].options || [];

  const navigateToResultsHandler = () => {
    navigation.navigate('ResultsScreen', {
      score,
      name: questionBox.name,
      totalQuestions: questionBox.length,
    });
  };
  const isLastQuestion = currentIndex === questionBox.length - 1;

  return (
    <MainBg>
      <ScrollView contentContainerStyle={{padding: 10}}>
        <QuizQuestion question={question} />
        <QuizOptions
          options={options}
          currentOption={currentOption}
          onPress={validationCheck}
          disable={isOptionOff}
          correctOption={correctOption}
        />
        {!isLastQuestion && nextBtnActive && <NextBtn onPress={nextQuestion} />}
        {isLastQuestion && showResultsButton && (
          <ResultsBtn onPress={navigateToResultsHandler} />
        )}
        {/* {nextBtnActive && <NextBtn onPress={nextQuestion} />} */}
        {/* {showResultsButton && <ResultsBtn onPress={navigateToResultsHandler} />} */}
      </ScrollView>
      <IconReturn />
    </MainBg>
  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({});
