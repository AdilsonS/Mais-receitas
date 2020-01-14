import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';

import { Categories } from '../data/dummy-data';
import Colors from '../constants/colors';

const CategoriesScreen = props => {
  const renderGriItem = (itemData) => {
    return (
      <TouchableOpacity
        style={{ ...styles.grideItem, backgroundColor: itemData.item.color }}
        activeOpacity={0.3}
        onPress={() => { props.navigation.navigate({ routeName: 'CategoryMeals', params: itemData.item }) }}
      >
        <View>
          <Text style={styles.item}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accenteColor,
  },
  headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.black,
};

const styles = StyleSheet.create({
  grideItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    fontFamily: 'open-sans-bold'
  },
});

export default CategoriesScreen;