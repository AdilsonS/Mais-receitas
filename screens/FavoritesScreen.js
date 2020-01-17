import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Meals } from '../data/dummy-data';
import GridOrList from '../components/GridOrList';
import CustomHeaderButton from '../components/CustomHeaderButton';

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

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  line: {
    height: Dimensions.get('window').height * 0.30,
  }
});

export default FavoritesScreen;