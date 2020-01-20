import { Meals } from '../../data/dummy-data';
import { TOOGLE_FAVORITE } from '../actions/meals';

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

    default:
      return state;
  }
}

export default mealsReducer;