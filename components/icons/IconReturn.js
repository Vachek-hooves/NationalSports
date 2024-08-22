import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const IconReturn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/img/icons/back.png')}
        style={{
          tintColor: Color.milk,
          width: 40,
          height: 40,
          // alignSelf: 'flex-end',
          // margin: 30,
          
        }}
      />
    </TouchableOpacity>
  );
};

export default IconReturn;

const styles = StyleSheet.create({});
