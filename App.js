import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AthleteScreen, HomeScreen, SaluteScreen} from './screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
