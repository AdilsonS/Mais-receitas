import React, { useState } from 'react';
import { View, StyleSheet, Switch, TouchableNativeFeedback, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultSwitch from '../components/DefaultSwitch';
import Colors from '../constants/colors';

const FiltersScreen = props => {
  const [isGlutemFree, setIsGlutemFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <DefaultSwitch
        labelSwitch='Gluten free'
        value={isGlutemFree}
        onValueChange={newValue => setIsGlutemFree(newValue)}
        style={styles.switch}
      />

      <DefaultSwitch
        labelSwitch='Lactose free'
        value={isLactoseFree}
        onValueChange={newValue => setIsLactoseFree(newValue)}
        trackColor={Colors.primaryColor}
        thumbColor={Colors.primaryColor}
        useColorLabel={true}
        style={styles.switch}
      />

      <DefaultSwitch
        labelSwitch='Vegan'
        value={isVegan}
        onValueChange={newValue => setIsVegan(newValue)}
        trackColor={Colors.accenteColor}
        thumbColor={Colors.accenteColor}
        style={styles.switch}
      />

      <DefaultSwitch
        labelSwitch='Vegetarian'
        value={isVegetarian}
        onValueChange={newValue => setIsVegetarian(newValue)}
        trackColor={Colors.lightBlue}
        thumbColor={Colors.lightBlue}
        useColorLabel={true}
        style={styles.switch}
      />
    </View>

  );
};

FiltersScreen.navigationOptions = (navigationData) => {
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
  screen: {
    flex: 1,
    padding: 5
  },

  title: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },

  switch: {
    marginTop: Dimensions.get('window').height * 0.03
  }

});

export default FiltersScreen;