import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

import GridOrList from '../components/GridOrList';
import DefaultText from '../components/DefaultText';
import DefaultStyle from '../constants/style';
import Colors from '../constants/colors';

const CategoryMealsScreen = props => {
  //#region 
  //TODO Caso seja passado apenas o Id fariamos uma busca dentro das categorias existentes
  //const selectCategory = Categories.find('id');

  //TODO Obtendo apenas uma propriedade passada
  //const pageTitle = props.navigation.getParam('title');
  //#endregion
  const favorites = useSelector(state => state.meals.favoriteMeals);
  const dispatch = useDispatch();
  const nav = (itemData) => {
    const isFavorite = favorites.some(ml => ml.id === itemData.item.id);
    //TODO Deve ser passado um objeto como parametro(params)
    props.navigation.navigate({ routeName: 'MealDetail', params: { meal: itemData.item, category: category, isFavorite: isFavorite } })
  }

  const clearFiltes = () => {
    console.log('clicou')
    dispatch(setFilters({
      glutemFree: false,
      lactoseFree: false,
      vegan: false,
      vegetarian: false,
    }));
  }

  //const catId = props.navigation.getParam('id');
  const category = props.navigation.state.params;

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(m => m.categoryIds.indexOf(category.id) >= 0);
  //const displayMeals = Meals.filter(m => m.categoryIds.indexOf(category.id) >= 0);

  if (displayMeals.length === 0 || !displayMeals)
    return (
      <View style={DefaultStyle.screen}>
        <DefaultText>No meals found, check your filters.</DefaultText>
        {/* <Text>or click <Text style={styles.clearFilter} onPress={clearFiltes}>here</Text> to cleared all filters</Text> */}
      </View>
    )

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
  },

  clearFilter: {
    fontSize: 20,
    color:Colors.blue,
  }
});

export default CategoryMealsScreen;