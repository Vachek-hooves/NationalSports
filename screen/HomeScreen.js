import {View} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';
import {useSportContext} from '../store/sport_context';

const HomeScreen = () => {
  const {quiz, guess} = useSportContext();
  console.log(quiz, guess);
  return (
    <MainImageBg>
      <BlueBg>
        <View>
          <IconAthlete />
        </View>
      </BlueBg>
    </MainImageBg>
  );
};

export default HomeScreen;
