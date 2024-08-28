import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import {MainBg} from '../components/layout';
import IconReturn from '../components/icons/IconReturn';
import {useSportContext} from '../store/sport_context';
import Scoreboard from '../components/reUsable/Scoreboard';
import {Color} from '../constants/colors';

const {width, height} = Dimensions.get('screen');
const HEIGHT = height * 0.07;

const AthleteScreen = () => {
  const {quiz, guess} = useSportContext();

  return (
    // <MainBg style={{padding: 10}}>

    <View
      style={{
        backgroundColor: Color.blue,
        flex: 1,
        padding: 10,
      }}>
      <SafeAreaView style={{height: '45%'}}>
        <View>
          <Scoreboard data={quiz} header={'QUIZ SCOREBOARD'} />
          <Scoreboard data={guess} header={'GUESS SCOREBOARD'} />
        </View>
        <View style={{margin: HEIGHT}}></View>
      </SafeAreaView>
      <IconReturn />
    </View>

    // </MainBg>
  );
};

export default AthleteScreen;

const styles = StyleSheet.create({});
