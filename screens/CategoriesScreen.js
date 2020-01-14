import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultStyle from '../constants/style.js';

const CategoriesScreen = props => {
  return (
    <View style={DefaultStyle.screen}>
      <Text>CategoriesScreen</Text>
      <Button title='Go to Meals' onPress={() => {
        props.navigation.navigate({ routeName: 'CategoryMeals' })
      }} />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CategoriesScreen;