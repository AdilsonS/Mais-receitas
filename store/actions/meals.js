export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE';

export const toogleFavorite = (id) => {
  return { type: TOOGLE_FAVORITE, mealId: id };
}