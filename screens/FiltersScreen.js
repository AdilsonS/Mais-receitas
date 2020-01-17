import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyle from '../constants/style.js';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScreen = props => {
  return (
    <View style={DefaultStyle.screen}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
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

export default FiltersScreen;