import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Color} from '../../constants/colors';

const {height} = Dimensions.get('screen');
const OPTION_HEIGHT = 80;

const QuizOptions = ({
  options,
  currentOption,
  onPress,
  disable,
  correctOption,
}) => {
//   const renderItem = ({item, index}) => {
//     return (
//       <TouchableOpacity
//         key={index}
//         style={styles.option}
//         onPress={() => onPress(item, index)}
//         // disabled={disable}
//       >
//         <Text style={{color: Color.blue, fontSize: 24, fontWeight: '700'}}>
//           {item}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => onPress(item, index)}
            // disabled={disable}
            >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
      {/* <SafeAreaView>
        <Carousel
          //   ref={c => (this.carousel = c)}
          data={options}
          renderItem={renderItem}
          sliderHeight={OPTION_HEIGHT * 3.5}
          itemHeight={60}
          vertical
          loop
          //   autoplay
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView> */}
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 50, // each element height
    // marginVertical: 55,
    marginTop: 30,
  },
});
