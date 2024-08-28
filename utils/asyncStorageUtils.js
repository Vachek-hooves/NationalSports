import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveGameData = async (data, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw new Error('Data saving to AsyncStorage error');
  }
};

export const getGameData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    // console.log('asyncStorageUtils-',data)
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error(`Game data fetching of ${key} error`);
  }
};
