import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {MainBg} from '../components/layout';
import IconReturn from '../components/icons/IconReturn';
import {IMAGES_QUIZ, IMAGES_GUESS} from '../data/data';
import {useSportContext} from '../store/sport_context';
import {Color} from '../constants/colors';

const {width, height} = Dimensions.get('screen');
const HEIGHT = height * 0.09;

const AthleteScreen = () => {
  const {quiz} = useSportContext();

  function renderPrizeList({item}) {
    console.log('score-', item.score);
    const id = item.id;
    const image = IMAGES_QUIZ.find(image => image.id === id);
    const score = item.score;

    return (
      <View style={styles.prizeContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.subText}>score</Text>
            <Text style={styles.scoreNum}>{score}</Text>
          </View>
          {score > 8 ? (
            <View style={styles.iconContainer}>
              <Image source={image[item.name]} style={styles.icon} />
            </View>
          ) : (
            <Text style={{color: Color.milk, fontWeight: '600', fontSize: 22}}>
              Your awards will be here
            </Text>
          )}
        </View>
      </View>
    );
  }

  return (
    <MainBg style={{padding: 10}}>
      <FlatList
        data={quiz}
        key={item => item.id.toString()}
        renderItem={renderPrizeList}
        showsVerticalScrollIndicator={false}
      />
      <View style={{margin: HEIGHT}}></View>
      <IconReturn />
    </MainBg>
  );
};

export default AthleteScreen;

const styles = StyleSheet.create({
  prizeContainer: {
    marginVertical: 5,
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.milk,
    paddingBottom: 5,
    // justifyContent: 'space-evently',
    paddingHorizontal: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 30, // це зробить подіум круглим
    shadowColor: Color.milk,
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 10, // для Android, щоб зробити тінь
  },
  icon: {
    width: 80,
    height: 80,
  },
  nameText: {
    color: Color.milk,
    fontWeight: '800',
    fontSize: 22,
    marginVertical: 10,
  },
  subText: {
    color: Color.milk,
    // marginVertical: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // backgroundColor: Color.green,
    padding: 5,
    marginVertical: 10,
  },
  scoreNum: {
    color: Color.milk,
    fontWeight: '800',
    fontSize: 28,
  },
});
