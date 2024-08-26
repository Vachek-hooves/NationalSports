import {ScrollView, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import useQuizGame from '../hooks/useQuizGame';
import {useSportContext} from '../store/sport_context';
import {QuizOptions, QuizProgress, QuizQuestion} from '../components/Quiz';
import {QuizBtn} from '../components/ui';

const QuizGameScreen = ({route, navigation}) => {
  const levelId = route.params;
  // const {quiz} = useSportContext();
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
    progress,
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
    <MainBg style={{alignItems:'center'}}>
      <ScrollView >
        <QuizProgress
          progress={progress}
          length={questionBox.length}
          questionNum={currentIndex + 1}
        />
        <QuizQuestion question={question} />
        <QuizOptions
          options={options}
          currentOption={currentOption}
          onPress={validationCheck}
          disable={isOptionOff}
          correctOption={correctOption}
        />
        {!isLastQuestion && nextBtnActive && (
          <QuizBtn onPress={nextQuestion}>NEXT</QuizBtn>
        )}
        {isLastQuestion && showResultsButton && (
          <View style={{flexDirection: 'row', flex: 1, gap: 20}}>
            <QuizBtn onPress={restartHandle}>Restart</QuizBtn>
            <QuizBtn onPress={navigateToResultsHandler}>Results</QuizBtn>
          </View>
        )}
      </ScrollView>
      {/* <IconReturn /> */}
    </MainBg>
  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({});
