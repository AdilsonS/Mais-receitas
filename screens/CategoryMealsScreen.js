import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultStyle from '../constants/style.js';
import Colors from '../constants/colors'
//import { Categories } from '../data/dummy-data.js';


const CategoryMealsScreen = props => {
  //TODO Caso seja passado apenas o Id fariamos uma busca dentro das categorias existentes
  //const selectCategory = Categories.find('id');

  //TODO Obtendo apenas uma propriedade passada
  //const pageTitle = props.navigation.getParam('title');

  return (
    <View style={DefaultStyle.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button title='Go to detail' onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' })
      }} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const category = navigationData.navigation.state.params;

  return {
    headerTitle: category.title,
    headerStyle: { backgroundColor: category.color },
    headerTintColor: Colors.primaryColor
  };
};

const styles = StyleSheet.create({

});

export default CategoryMealsScreen;