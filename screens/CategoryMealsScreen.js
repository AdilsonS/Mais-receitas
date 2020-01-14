import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultStyle from '../constants/style.js';

const CategoryMealsScreen = props => {
  console.log('props ',props)
  return (
    <View style={DefaultStyle.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button title='Go to detail' onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' })
      }} />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CategoryMealsScreen;