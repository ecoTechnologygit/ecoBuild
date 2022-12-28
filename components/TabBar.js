import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabBar = () => {
  return (
    <View style={styles.container}>
      <Text>TabBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
