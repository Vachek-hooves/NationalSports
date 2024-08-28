import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import IconReturn from '../components/icons/IconReturn';
import {Color} from '../constants/colors';
import {useState} from 'react';
import ScoreBoardComponent from '../components/scroreBoard/ScoreBoardComponent';
import LogInForm from '../components/User/LogInForm';

const {width, height} = Dimensions.get('screen');
const HEIGHT = height * 0.07;

const AthleteScreen = () => {
  const [userCreated, setUserCreated] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {/* {userCreated && (
        <SafeAreaView style={{height: '45%'}}>
          <View style={{height: '75%'}}>
            <Scoreboard data={quiz} header={'QUIZ SCOREBOARD'} />
            <Scoreboard data={guess} header={'GUESS SCOREBOARD'} />
          </View>
          <View style={{margin: HEIGHT}}></View>
        </SafeAreaView>
      )} */}
      <SafeAreaView>
        <LogInForm />
      </SafeAreaView>
      {userCreated && <ScoreBoardComponent />}
      <IconReturn />
    </View>
  );
};

export default AthleteScreen;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: Color.blue, flex: 1, padding: 10},
});
