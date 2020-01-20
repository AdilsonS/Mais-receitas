import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens, enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import MealsReducer from './store/reducers/meals';

// TODO useScreens foi depreciado no lugar deve ser usado enableScreens
//useScreens();
enableScreens();

const rootReducer = combineReducers({
  meals: MealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />

  return <Provider store={store}><MealsNavigator /></Provider>;

};
