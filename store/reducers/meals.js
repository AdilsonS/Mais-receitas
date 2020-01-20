import { Meals } from '../../data/dummy-data';
import { TOOGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: Meals,
  filteredMeals: Meals,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);

      if (existingIndex >= 0) {
        const updateFav = [...state.favoriteMeals];
        updateFav.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updateFav };
      } else {
        const newFav = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(newFav) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updateFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutemFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.lactoseFree && !meal.isLactorseFree) {
          return false
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false
        }
        return true;
      });      
      return { ...state, filteredMeals: updateFilteredMeals };
    default:
      return state;
  }
}

export default mealsReducer;