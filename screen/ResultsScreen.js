import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Color} from '../constants/colors';

const ResultsScreen = ({route}) => {
  console.log(route.params);
  const SCORE = route.params.score;
  const IMAGE = route.params.image;
  return (
    <ImageBackground
      source={IMAGE}
      style={{flex: 1, backgroundColor: Color.blue}}
      imageStyle={{opacity: 0.3}}>
      <SafeAreaView>
        <Text>{SCORE}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
