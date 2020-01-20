import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import GridOrList from '../components/GridOrList';

const CategoryMealsScreen = props => {
  //#region 
  //TODO Caso seja passado apenas o Id fariamos uma busca dentro das categorias existentes
  //const selectCategory = Categories.find('id');

  //TODO Obtendo apenas uma propriedade passada
  //const pageTitle = props.navigation.getParam('title');
  //#endregion
  const favorites = useSelector(state => state.meals.favoriteMeals);
  const nav = (itemData) => {
    const isFavorite = favorites.some(ml => ml.id === itemData.item.id);
    //TODO Deve ser passado um objeto como parametro(params)
    props.navigation.navigate({ routeName: 'MealDetail', params: { meal: itemData.item, category: category, isFavorite: isFavorite } })
  }



  //const catId = props.navigation.getParam('id');
  const category = props.navigation.state.params;

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(m => m.categoryIds.indexOf(category.id) >= 0);
  //const displayMeals = Meals.filter(m => m.categoryIds.indexOf(category.id) >= 0);

  return (
    <GridOrList
      data={displayMeals}
      isDetail={true}
      isImage={true}
      columns={1}
      onPressGrid={nav}
      style={styles.line}
    />

  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const category = navigationData.navigation.state.params;

  return {
    headerTitle: category.title,
    // headerStyle: { backgroundColor: category.color },
    // headerTintColor: Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  line: {
    height: Dimensions.get('window').height * 0.30,
  }
});

export default CategoryMealsScreen;