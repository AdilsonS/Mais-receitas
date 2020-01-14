import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/colors'

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    //TODO As configurações feitas aqui sobrepõe todas as outras
    navigationOptions:
    {
      headerTitle: 'Meal Categories'
    }
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
  initialRouteName:'Categories',
  //TODO As configurações feitas aqui podem ser sobreposta por qualquer outra configuração
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accenteColor },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.black,
  }
});

export default createAppContainer(MealsNavigator);