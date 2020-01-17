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
import DefaultText from '../components/DefaultText';

const defaultStackNavigationOptions = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accenteColor },
  headerTitleStyle: { fontFamily: 'open-sans-bold' },
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
      tabBarIcon: (tabInfo) => { return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} /> },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android'
        ? <DefaultText style={{ fontFamily: 'open-sans-bold' }}>Meals</DefaultText>
        : Meals,
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} /> },
      tabBarColor: Colors.accenteColor,
      tabBarLabel: Platform.OS === 'android'
        ? <DefaultText style={{ fontFamily: 'open-sans-bold' }}>Fav</DefaultText>
        : Meals,
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.white,
      shifting: true,
      // shifting: false,
      // barStyle: {backgroundColor: Colors.primaryColor }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.white,
        // TODO Esssa é uma forma de definir estilo dentro do componente createBottomTabNavigator para IOS
        labelStyle: { fontFamily: 'open-sans' }
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
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: Colors.accenteColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  });


export default createAppContainer(MainNavigation);