import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen, SaluteScreen} from './screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SaluteScreen" component={SaluteScreen} />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{animation: 'fade', animationDuration: 1500}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
