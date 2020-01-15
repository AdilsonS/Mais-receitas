import React from 'react';
import { StyleSheet } from 'react-native';

import { Categories } from '../data/dummy-data';
import GridOrList from '../components/GridOrList';

const CategoriesScreen = props => {
  const nav = (itemData) => {
    //TODO Deve ser passado um objeto como parametro
    props.navigation.navigate({ routeName: 'CategoryMeals', params: itemData.item })
  }

  return (
    <GridOrList
      data={Categories}
      columns={2}
      onPressGrid={nav}     
    />
  )
};

//TODO Cofiguração enviada para o arquivo MealsNavigator
// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
//   headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accenteColor },
//   headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.black,
// };

const styles = StyleSheet.create({
 
});

export default CategoriesScreen;