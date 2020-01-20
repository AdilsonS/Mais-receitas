import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton.js';
import Colors from '../constants/colors';
import DefaultText from '../components/DefaultText';
import { toogleFavorite } from '../store/actions/meals';

// const renderListIngredients = (ingredients, index) => {
//   return <DefaultText key={index}> {ingredients}</DefaultText>
// };

const renderListSteps = (steps, index) => {
  return <DefaultText key={index}>{index + 1}º - {steps}</DefaultText>
};

const MealDetailScreen = props => {
  const meal = props.navigation.state.params.meal;
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toogleFavorite(meal.id));
  }, [dispatch, meal.id]);

  // TODO Setando parametros dentro de props para serem acessados dentro de navigationOptions
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      </View>
      <View style={styles.containerDetail}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity}</DefaultText>
        <DefaultText>{meal.affordability}</DefaultText>
      </View>


      <DefaultText style={styles.titleList}>Ingredients</DefaultText>
      <View style={styles.containerList}>
        {meal.ingredients.map((ingredients, index) => <DefaultText key={index}> {ingredients}</DefaultText>)}
      </View>


      <DefaultText style={styles.titleList}>Steps</DefaultText>
      <View style={styles.containerList}>
        {meal.steps.map((steps, index) => renderListSteps(steps, index))}
      </View>

      {/* TODO Botao com a função de voltar ao inicio
      <Button title='Go Home' onPress={() => props.navigation.popToTop()} /> */}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // const category = navigationData.navigation.state.params.category;
  const meal = navigationData.navigation.state.params.meal;

  // TODO Obtendo paramentro setados dentro de props
  const toggleFav = navigationData.navigation.getParam('toggleFav');

  return {
    //headerTitle: meal.title,
    //headerStyle: { backgroundColor: category.color },
    //headerTintColor: Colors.primaryColor,
    headerTitle: () =>
      <View>
        <DefaultText style={styles.title}>Meal Detail</DefaultText>
        <DefaultText style={styles.subTitle}>{meal.title}</DefaultText>
      </View>
    ,

    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star-outline'
          onPress={toggleFav} />
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
  image: {
    width: '100%',
    height: '100%'
  },

  containerImage: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.3
  },

  containerDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  containerList: {
    marginLeft: 15,
  },

  titleList: {
    fontFamily: 'open-sans-bold',
    marginLeft: 10,
    fontSize: 16
  }
});

export default MealDetailScreen;