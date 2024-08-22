import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AthleteScreen, GameScreen, HomeScreen, SaluteScreen} from './screen';
import {SportProvider, useSportContext} from './store/sport_context';
import {SportContext} from './store/sport_context';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SportProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 1500,
          }}>
          <Stack.Screen name="SaluteScreen" component={SaluteScreen} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            // options={{animation: 'fade', animationDuration: 1500}}
          />
          <Stack.Screen name="AthleteScreen" component={AthleteScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SportProvider>
  );
}

export default App;
