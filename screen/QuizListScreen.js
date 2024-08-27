import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {MainBg} from '../components/layout';
import {IMAGES_QUIZ} from '../data/data';
import {Color} from '../constants/colors';
import {IconReturn} from '../components/icons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const WIDTH = width * 0.8;
const HEIGHT = height * 0.09;
const ITEM_HEIGHT = height * 0.2;

const QuizListScreen = () => {
  const navigation = useNavigation();

  function renderQuizList({item}) {
    const id = item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btnStyle}
        onPress={() => navigation.navigate('QuizGameScreen', id)}>
        <ImageBackground
          source={item.image}
          style={styles.image}
          resizeMode="cover">
          <Text style={styles.text}>{item.sport}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <MainBg style={{alignItems: 'center'}}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        renderItem={renderQuizList}
        data={IMAGES_QUIZ}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        // ListFooterComponent={<View style={styles.footer} />}
      />
      <View style={{margin: HEIGHT}}></View>
      <IconReturn />
    </MainBg>
  );
};

export default QuizListScreen;

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
