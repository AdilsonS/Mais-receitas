import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton.js';

import DefaultStyle from '../constants/style.js';

const MealDetailScreen = props => {
  return (
    <View style={DefaultStyle.screen}>
      <Text>MealDetailScreen</Text>
      <Button title='Go Home' onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {  
  // const category = navigationData.navigation.state.params.category;
  const meal = navigationData.navigation.state.params.meal;

  return {
    headerTitle: meal.title,
    //headerStyle: { backgroundColor: category.color },
    //headerTintColor: Colors.primaryColor,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star-outline'
          onPress={() => { console.log('apertou') }} />
      </HeaderButtons>
  }
};

const styles = StyleSheet.create({

});

export default MealDetailScreen;