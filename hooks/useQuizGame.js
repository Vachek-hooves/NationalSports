import {Animated, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {useSportContext} from '../store/sport_context';

const useQuizGame = levelId => {
  //   console.log('useQuizGame', levelId);
  const {quiz} = useSportContext();
  const thisLevel = quiz.find(item => item.id === levelId) || [];
  const questionBox = thisLevel.levelQuestions;

  const [generalState, setGeneralState] = useState({
    currentIndex: 0,
    currentOption: null,
    correctOption: null,
    isOptionOff: false,
    score: 0,
    nextBtnActive: false,
    showResultsButton: false,
    progress: new Animated.Value(0),
  });

  const validationCheck = choosenOption => {
    // console.log(choosenOption);
    setGeneralState(prevState => {
      const isCorrect =
        choosenOption === questionBox[prevState.currentIndex].correctAnswer;
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;
      const isOptionChosenOnLastQuestion =
        isLastQuestion && choosenOption !== null;

      if (isLastQuestion) {
        Animated.timing(prevState.progress, {
          toValue: questionBox.length,
          duration: 600,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(prevState.progress, {
          toValue: prevState.currentIndex + 1, // updates on every new question
          duration: 600,
          useNativeDriver: false,
        }).start();
      }

      return {
        ...prevState,
        currentOption: choosenOption,
        correctOption: questionBox[prevState.currentIndex].correctAnswer,
        isOptionOff: true,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        nextBtnActive: !isLastQuestion, // active if not last question
        showResultsButton: isLastQuestion && choosenOption !== null, //
      };
    });
  };

  const nextQuestion = () => {
    setGeneralState(prevState => {
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;

      if (!isLastQuestion) {
        return {
          ...prevState,
          currentIndex: prevState.currentIndex + 1,
          currentOption: null,
          correctOption: null,
          isOptionOff: false,
          nextBtnActive: false,
          showResultsButton: isLastQuestion
            ? prevState.showResultsButton
            : false,
        };
      } else {
        return {
          ...prevState,
          nextBtnActive: true,
          showResultsButton: false,
        };
      }
    });
  };

  const restartHandle = () => {
    setGeneralState({
      currentIndex: 0,
      currentOption: null,
      correctOption: null,
      isOptionOff: false,
      score: 0,
      nextBtnActive: false,
      showResultsButton: false,
      progress: new Animated.Value(0),
    });
  };

  return {
    validationCheck,
    nextQuestion,
    restartHandle,
    generalState,
    thisLevel,
    questionBox,
  };
};

export default useQuizGame;
