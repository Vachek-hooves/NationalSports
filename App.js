import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AthleteScreen,
  GameScreen,
  GuessGameScreen,
  GuessListScreen,
  HomeScreen,
  QuizGameScreen,
  QuizListScreen,
  ResultsScreen,
  RulesScreen,
  SaluteScreen,
} from './screen';
import {SportProvider} from './store/sport_context';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SportProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 400,
          }}>
          <Stack.Screen name="SaluteScreen" component={SaluteScreen} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            // options={{animation: 'fade', animationDuration: 1500}}
          />
          <Stack.Screen name="AthleteScreen" component={AthleteScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="QuizListScreen" component={QuizListScreen} />
          <Stack.Screen name="QuizGameScreen" component={QuizGameScreen} />
          <Stack.Screen name="GuessListScreen" component={GuessListScreen} />
          <Stack.Screen name="GuessGameScreen" component={GuessGameScreen} />
          <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SportProvider>
  );
}

export default App;
