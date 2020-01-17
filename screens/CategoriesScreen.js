import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Categories } from '../data/dummy-data';
import GridOrList from '../components/GridOrList';
import CustomHeaderButton from '../components/CustomHeaderButton';

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

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
  }
};

const styles = StyleSheet.create({

});

export default CategoriesScreen;