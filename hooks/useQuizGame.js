import {StyleSheet, Text, View} from 'react-native';
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
  });

  const validationCheck = choosenOption => {
    // console.log(choosenOption);
    setGeneralState(prevState => {
      const isCorrect =
        choosenOption === questionBox[prevState.currentIndex].correctAnswer;
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;
      const isOptionChosenOnLastQuestion =
        isLastQuestion && choosenOption !== null;
      return {
        ...prevState,
        currentOption: choosenOption,
        correctOption: questionBox[prevState.currentIndex].correctAnswer,
        isOptionOff: true,
        nextBtnActive: true,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        // nextBtnActive: !isLastQuestion, // Next button should be active if not the last question
        // showResultsButton: isOptionChosenOnLastQuestion, // Show results button if on last question and option chosen
      };
    });
  };

  const nextQuestion = () => {
    setGeneralState(prevState => {
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;
      console.log('useQuizGame', isLastQuestion);

      return {
        ...prevState,
        currentIndex: isLastQuestion
          ? prevState.currentIndex
          : prevState.currentIndex + 1,
        currentOption: null,
        correctOption: null,
        isOptionOff: false,
        nextBtnActive: false,
        showResultsButton: isLastQuestion,
        // currentIndex: isLastQuestion ? prevState.currentIndex : prevState.currentIndex + 1,
        showResultsButton: isLastQuestion ? prevState.showResultsButton : false,
      };
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
