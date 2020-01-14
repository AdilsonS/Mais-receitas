import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultStyle from '../constants/style.js';

const MealDetailScreen = props => {
  return (
    <View style={DefaultStyle.screen}>
      <Text>MealDetailScreen</Text>
      <Button title='Go Home' onPress={()=>{
        props.navigation.popToTop();
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default MealDetailScreen;