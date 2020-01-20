import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultSwitch from '../components/DefaultSwitch';
import DefaultText from '../components/DefaultText';


const FiltersScreen = props => {
  const { navigation } = props
  const [isGlutemFree, setIsGlutemFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutemFree: isGlutemFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }

    console.log('appliedFilters ', appliedFilters);
  }, [isGlutemFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Avaliable fitlter/restrictions</DefaultText>

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

      {/* <View style={styles.buttonSave}>
        <Ionicons name='ios-save' size={50} color={Colors.black} />
      </View> */}
    </View>

  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerRight: () => (
      <View style={styles.containerHeaderButton}>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Save'
            iconName='ios-save'
            onPress={navigationData.navigation.getParam('save')} />
        </HeaderButtons>

        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => navigationData.navigation.toggleDrawer()} />
        </HeaderButtons>
      </View>
    )
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
  },

  containerHeaderButton: {
    flexDirection: 'row',
  }

  // buttonSave: {
  //   flex: 1,
  //   alignItems: 'flex-end',
  //   justifyContent: 'flex-end',
  //   margin: 10
  // }
});

export default FiltersScreen;