import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
  {
    id: "Home", 
    title: "HomeButton",
    image: "https://i.postimg.cc/x1YWnK2W/home-button.png",
    screen: "NotifictionScreen"
  },
  {
    id: "Explore", 
    title: "ExploreButton",
    image: "https://i.postimg.cc/x1DPWSCp/blue-minimalist-network-logo-design.png",
    screen: "ExploreScreen"
  }, 
  {
    id: "AddEvent", 
    title: "Add Event",
    image: "https://i.postimg.cc/V6ChjWHd/blue-minimalist-network-logo-design-1.png",
    screen: "AddEventScreen"
  }, 
  {
    id: "Chat", 
    title: "ChatButton",
    image: "https://i.postimg.cc/NjrdHFxQ/chat-1.png",
    screen: "ChatScreen"
  }
  
];


const TabBar = () => {
  return (
    <FlatList

    data = {data}
    keyExtractor = {(item) => item.id}
    horizontal
    renderItem = {({item}) => (
    <TouchableOpacity >
      <View className = "ml-12 mr-3 ">
        <Image
        style = {{width: 30, height: 40, resizeMode: "contain" }}
        source = {{uri: item.image}}
        />
      </View>
    </TouchableOpacity>)}
    />
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
