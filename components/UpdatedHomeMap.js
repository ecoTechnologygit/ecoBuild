import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Overlay } from 'react-native-elements';

const Map = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const data = [
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
    { key: 'Item 4' },
    { key: 'Item 5' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigateToScreen(item.key)}>
      <Text style={styles.itemText}>{item.key}</Text>
    </TouchableOpacity>
  );

  const navigateToScreen = (item) => {
    // Navigate to the desired screen using the `item` value
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <TouchableOpacity onPress={toggleOverlay} style={styles.button}>
        <Text style={styles.buttonText}>Toggle Overlay</Text>
      </TouchableOpacity>
      <Overlay isVisible={isOverlayVisible} onBackdropPress={toggleOverlay}>
        <FlatList
          data={data}
          renderItem={renderItem}
          style={styles.flatList}






          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 20,
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCCCCC',
  },
});

export default Map;