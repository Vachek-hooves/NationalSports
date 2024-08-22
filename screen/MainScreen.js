import {View} from 'react-native';
import {BlueBg, MainImageBg} from '../components/ui';
import IconAthlete from '../components/icons/IconAthlete';

const MainScreen = () => {
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

export default MainScreen;
