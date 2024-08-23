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
const {width, height} = Dimensions.get('screen');
const WIDTH = width * 0.8;
const HEIGHT = height * 0.09;

const QuizListScreen = () => {
  function renderQuizList({item}) {
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.btnStyle}>
        <ImageBackground
          source={item.image}
          style={styles.image}
          resizeMode="cover">
          <Text>{item.sport}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <MainBg>
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
    height: 200,
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
});
