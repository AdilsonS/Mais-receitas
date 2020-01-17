import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyle from '../constants/style.js';
import CustomHeaderButton from '../components/CustomHeaderButton.js';
import Colors from '../constants/colors'

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
    //headerTitle: meal.title,
    //headerStyle: { backgroundColor: category.color },
    //headerTintColor: Colors.primaryColor,
    headerTitle: () =>
      <View>
        <Text style={styles.title}>Meal Detail</Text>
        <Text style={styles.subTitle}>{meal.title}</Text>
      </View>
    ,

    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star-outline'
          onPress={() => { console.log('apertou') }} />
      </HeaderButtons>
    ,
  }
};

const styles = StyleSheet.create({
  title: {
    color: Platform.OS === 'android' ? Colors.white : Colors.black,
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  subTitle: {
    color: Platform.OS === 'android' ? Colors.white : Colors.black,
  },
});

export default MealDetailScreen;