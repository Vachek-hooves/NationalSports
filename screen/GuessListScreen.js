import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {MainBg} from '../components/layout';
import {IMAGES_GUESS} from '../data/data';
import {Color} from '../constants/colors';
import {IconReturn} from '../components/icons';

const {width, height} = Dimensions.get('screen');
const WIDTH = width * 0.8;
const HEIGHT = height * 0.09;
const ITEM_HEIGHT = height * 0.2;

const GuessListScreen = ({navigation}) => {
  function renderListGuess({item}) {
    const id = item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btnStyle}
        onPress={() => navigation.navigate('GuessGameScreen', id)}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>{item.sport}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  return (
    <MainBg style={{alignItems: 'center'}}>
      <FlatList
        data={IMAGES_GUESS}
        keyExtractor={item => item.id.toString()}
        renderItem={renderListGuess}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      <View style={{margin: HEIGHT}}></View>
      <IconReturn />
    </MainBg>
  );
};

export default GuessListScreen;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: ITEM_HEIGHT,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Color.milk,
  },
  listContent: {
    paddingBottom: 20,
  },
  footer: {
    height: 10,
  },
  text: {fontSize: 32, fontWeight: '900', color: Color.milk, letterSpacing: 8},
});
