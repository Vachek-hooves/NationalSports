import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import useGuessGame from '../hooks/useGuessGame';
import {useState} from 'react';

const GuessGameScreen = ({route, navigation}) => {
  const [modal, setModal] = useState(false);
  const levelId = route.params;
  const {} = useGuessGame(levelId);

  return <ImageBackground></ImageBackground>;
};

export default GuessGameScreen;

const styles = StyleSheet.create({});
