import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {useState} from 'react';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import useQuizGame from '../hooks/useQuizGame';
import {useSportContext} from '../store/sport_context';
import {QuizOptions, QuizProgress, QuizQuestion} from '../components/Quiz';
import {QuizBtn} from '../components/ui';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../constants/colors';

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
    quizBgImage,
    readStory,
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

  console.log(readStory);

  return (
    // <MainBg style={{alignItems: 'center'}}>
    <ImageBackground
      source={quizBgImage.image}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: Color.blue,
      }}
      imageStyle={{opacity: 0.3}}
      resizeMode="cover">
      <SafeAreaView>
        <ScrollView contentContainerStyle={{padding: 10}}>
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
          {readStory && (
            <Text style={{color: Color.milk, fontWeight: '800', fontSize: 24}}>
              READ INTERESTING FACT
            </Text>
          )}
          {isLastQuestion && showResultsButton && (
            <View style={{flexDirection: 'row', flex: 1, gap: 20}}>
              <QuizBtn onPress={restartHandle}>Restart</QuizBtn>
              <QuizBtn onPress={navigateToResultsHandler}>Results</QuizBtn>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
      {/* <IconReturn /> */}
    </ImageBackground>
    // </MainBg>
  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({});
