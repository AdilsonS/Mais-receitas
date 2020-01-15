import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Categories } from '../data/dummy-data';
import GridCategory from '../components/GridCategory';

const CategoriesScreen = props => {

  const nav = item => {
    props.navigation.navigate({ routeName: 'CategoryMeals', params: item })
  }

  const renderGriItem = (itemData) => {
    return (
      <GridCategory
        category={itemData.item}
        onPressCategory={nav.bind(this, itemData.item)}
      />
    )
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={Categories}
      renderItem={renderGriItem}
      numColumns={2}
    />
  );
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