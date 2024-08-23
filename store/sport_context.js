import {useState, useEffect, useContext, createContext} from 'react';
import {QUIZ_DATA, MATCH_DATA} from '../data/data';
import {getGameData, saveGameData} from '../utils/asyncStorageUtils';

export const SportContext = createContext({});

export const SportProvider = ({children}) => {
  const [quiz, setQuiz] = useState([]);
  const [guess, setGuess] = useState([]);

  useEffect(() => {
    const launchData = async () => {
      try {
        let quizData = await getGameData('quiz');
        let guessData = await getGameData('guess');

        if (quizData.length === 0) {
          await saveGameData(QUIZ_DATA, 'quiz');
          quizData = await getGameData('quiz');
        }
        setQuiz(quizData);

        if (guessData.length === 0) {
          await saveGameData(MATCH_DATA, 'quess');
          guessData = await getGameData('quess');
        }
        setGuess(guessData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    launchData();
  }, []);

  const value = {quiz, guess};
  return (
    <SportContext.Provider value={value}>{children}</SportContext.Provider>
  );
};

export const useSportContext = () => {
  const sportContext = useContext(SportContext);
  if (!sportContext) {
    throw new Error('Use useSportContext inside SportProvider');
  }
  return sportContext;
};
