import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import GridOrList from '../components/GridOrList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultStyle from '../constants/style';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favorites = useSelector(state => state.meals.favoriteMeals);

  const nav = (itemData) => {
    const isFavorite = favorites.some(ml => ml.id === itemData.item.id);
    props.navigation.navigate({ routeName: 'MealDetail', params: { meal: itemData.item, isFavorite: isFavorite } })
  }


  if (favorites.length === 0 || !favorites)
    return (
      <View style={DefaultStyle.screen}>
        <DefaultText>No favorite meals found.</DefaultText>
      </View>
    )

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