import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Dimensions, Platform } from 'react-native';

import Colors from '../constants/colors';

const GridCategory = props => {
  const { category, onPressCategory } = props

  let Touchable = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21)
    Touchable = TouchableNativeFeedback;

  return (
    <View style={styles.grideItem}>
      <Touchable
        style={{ flex: 1 }}
        activeOpacity={0.3}
        onPress={onPressCategory}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: category.color } }}>
          <Text style={styles.item}>{category.title}</Text>
        </View>
      </Touchable>
    </View>

  )
};

const styles = StyleSheet.create({
  grideItem: {
    flex: 1,
    margin: Dimensions.get('window').height * 0.02,
    height: Dimensions.get('window').height * 0.25,
    overflow: 'hidden'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },

  item: {
    fontFamily: 'open-sans-bold',
    fontSize:18
  },
});

export default GridCategory;
