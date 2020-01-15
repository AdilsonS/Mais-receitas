import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableNativeFeedback, Dimensions, Platform, ImageBackground } from 'react-native';

import Colors from '../constants/colors';

const GridCategory = props => {
  const { data, isDetail, isImage, onPressGrid, columns, style } = props

  let Touchable = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21)
    Touchable = TouchableNativeFeedback;

  const renderGriItem = (itemData) => {
    const color = itemData.item.color != null ? itemData.item.color : Colors.white;
    const bkgColor = itemData.item.color != null ? itemData.item.color : 'rgba(0,0,0, 0.3)';
    const txtColor = !isImage ? Colors.black : Colors.white;

    let renderImage = <Text style={{ ...styles.title, ...{ backgroundColor: bkgColor, color: txtColor } }}>{itemData.item.title}</Text>
    if (isImage)
      renderImage = <ImageBackground style={styles.image} source={{ uri: itemData.item.imageUrl }}>
        <Text style={{ ...styles.title, ...{ backgroundColor: bkgColor, color: txtColor } }}>{itemData.item.title}</Text>
      </ImageBackground>

    let renderDetail
    if (isDetail)
      renderDetail =
        <View style={styles.containerDetail}>
          <Text>{itemData.item.duration}m</Text>
          <Text>{itemData.item.complexity}</Text>
          <Text>{itemData.item.affordability}</Text>
        </View>

    return (
      <View style={{ ...styles.grideItem, ...style }}>
        <Touchable
          style={{ flex: 1 }}
          activeOpacity={0.3}
          onPress={onPressGrid.bind(this, itemData)}
        >
          <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
            {renderImage}
            {renderDetail}
          </View>
        </Touchable>
      </View>
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={data}
      renderItem={renderGriItem}
      numColumns={columns != null ? columns : 1}
    />
  )
};

const styles = StyleSheet.create({
  grideItem: {
    flex: 1,
    margin: Dimensions.get('window').height * 0.02,
    height: Dimensions.get('window').height * 0.25,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },

  containerDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    width: Dimensions.get('window').width * 0.9,
  },

  image: {
    justifyContent:'flex-end',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.25
  }
});

export default GridCategory;