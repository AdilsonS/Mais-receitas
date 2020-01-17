import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { Meals } from '../data/dummy-data';
import GridOrList from '../components/GridOrList';

const FavoritesScreen = props => {
  //console.log('props ', props.navigation.state.params);
  const favorites = Meals.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  const nav = (itemData) => {
    props.navigation.navigate({ routeName: 'MealDetail', params: { meal: itemData.item } })
  }

  return (
    <GridOrList
      data={favorites}
      columns={1}
      isDetail={true}
      isImage={true}
      onPressGrid={nav}
      style={styles.line}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    height: Dimensions.get('window').height * 0.30,
  }
});

export default FavoritesScreen;