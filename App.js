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
} from './screen';
import {SportProvider} from './store/sport_context';
import {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';

const Stack = createNativeStackNavigator();

const loaders = [
  require('./assets/img/mainbg/loader1.png'),
  require('./assets/img/mainbg/loader2.png'),
];

function App() {
  const [id, setItem] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);
  const fadeStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setItem(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setItem(2);
  };

  return (
    <SportProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 400,
          }}>
          {id < 2 ? (
            <Stack.Screen name="Hello" options={{headerShown: false}}>
              {() => (
                <View style={{flex: 1}}>
                  <Animated.Image
                    source={loaders[id]}
                    style={[
                      {width: '100%', flex: 1},
                      {opacity: animation},
                    ]}></Animated.Image>
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          )}
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
