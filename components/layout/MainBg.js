import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {BlueBg, MainImageBg} from '../ui';

const {height} = Dimensions.get('screen');

const MainBg = ({children}) => {
  return (
    <BlueBg>
      <MainImageBg />
      <View
        style={{
          height: height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
    </BlueBg>
  );
};

export default MainBg;

const styles = StyleSheet.create({});
