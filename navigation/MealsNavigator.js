import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/colors';

const defaultStackNavigationOptions = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accenteColor },
  headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.black,
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    //TODO As configurações feitas aqui sobrepõe todas as outras
    navigationOptions: { headerTitle: 'Meal Categories' }
  },

  CategoryMeals: {
    screen: CategoryMealsScreen
  },

  MealDetail: {
    screen: MealDetailScreen
  }
},
  {
    //TODO Define a tela inicial, caso não seja definido sera utilizado a primeira da fila
    initialRouteName: 'Categories',
    //TODO As configurações feitas aqui podem ser sobreposta por qualquer outra configuração
    defaultNavigationOptions: defaultStackNavigationOptions
  });

const FavNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: { headerTitle: 'Meal Favorites', }
  },
  MealDetail: {
    screen: MealDetailScreen
  }
},
  {
    initialRouteName: 'Favorites',
    defaultNavigationOptions: defaultStackNavigationOptions
  });

const FilterNavigation = createStackNavigator({
  Filter: {
    screen: FiltersScreen,
    navigationOptions: {
      headerTitle: 'Filter Meals'
    }
  }
},
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  });

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Fav',
      tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} /> },
      tabBarColor: Colors.accenteColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.white,
      shifting: true,
      // shifting: false,
      // barStyle: { backgroundColor: Colors.primaryColor }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.white,
      }
    });

const MainNavigation = createDrawerNavigator({
  MealsFavTabNavigator: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: (drawerInfo) => { return <Ionicons name='ios-home' size={25} color={drawerInfo.tintColor} /> }
    }
  },
  FilterNavigation: {
    screen: FilterNavigation,
    navigationOptions: {
      drawerLabel: 'Filters',
      drawerIcon: (drawerInfo) => { return <Ionicons name='ios-search' size={25} color={drawerInfo.tintColor} /> }
    }
  }
},
  {
    contentOptions: {
      activeTintColor: Colors.accenteColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  });


export default createAppContainer(MainNavigation);