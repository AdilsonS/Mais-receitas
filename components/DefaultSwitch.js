import React from 'react';
import { Switch, TouchableNativeFeedback, StyleSheet, View, Dimensions } from 'react-native';

import DefaultText from './DefaultText';

const DefaultSwitch = props => {
  const { style, labelSwitch, value, onValueChange, trackColor, thumbColor, useColorLabel } = props;
  let track
  if (trackColor != null)
    track = { true: trackColor }

  let tumb
  if (thumbColor != null)
    tumb = thumbColor

  let colorLabel
  if (useColorLabel)
    colorLabel = tumb



  return (
    <View style={{ ...styles.containerSwitch, ...style }}>
      <DefaultText style={{ color: colorLabel }}>{labelSwitch}</DefaultText>
      <View style={styles.switch}>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={track}
          thumbColor={tumb}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  containerSwitch: {
    margin: Dimensions.get('window').width * 0.01,
    minWidth: '50%',
    justifyContent: 'center'
  },
  switch: {
    position: 'absolute',
    width: '100%'
  }
});

export default DefaultSwitch;