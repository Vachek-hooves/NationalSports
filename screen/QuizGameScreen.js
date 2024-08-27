import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import useQuizGame from '../hooks/useQuizGame';
import {useSportContext} from '../store/sport_context';
import {
  InterestingFact,
  QuizOptions,
  QuizProgress,
  QuizQuestion,
} from '../components/Quiz';
import {QuizBtn} from '../components/ui';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../constants/colors';

const QuizGameScreen = ({route, navigation}) => {
  const [modal, setModal] = useState(false);
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
    fact,
    // modal,
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
    // <MainBg style={{alignItems: 'center'}}>
    <ImageBackground
      source={quizBgImage.image}
      style={styles.bgImage}
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
            // <TouchableOpacity onPress={() => setModal(true)}>
            //   <Text>READ FACT</Text>
            // </TouchableOpacity>
            <QuizBtn onPress={() => setModal(true)}>READ FACT</QuizBtn>
          )}
          <InterestingFact
            visible={modal}
            close={() => setModal(false)}
            bgImage={quizBgImage.image}
            fact={fact}
          />
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

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Color.blue,
  },
});
