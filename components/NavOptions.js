import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
  {
    id: "heart", 
    title: "heartButton",
    image: "https://i.postimg.cc/qBjjC7XV/heart.png",
    screen: "notifictionScreen"
  },
  {
    id: "chat", 
    title: "chatButton",
    image: "https://i.postimg.cc/Pfw3GPnf/speech-bubble.png",
    screen: "chatScreen"
  }
];




const NavOptions = () => {
  return (
    <FlatList

    data = {data}
    keyExtractor = {(item) => item.id}
    horizontal
    renderItem = {({item}) => (
    <TouchableOpacity >
      <View className = "ml-2">
        <Image
        style = {{width: 30, height: 30, resizeMode: "contain" }}
        source = {{uri: item.image}}
        />
      </View>
    </TouchableOpacity>)}
    />
  )
}

export default NavOptions

