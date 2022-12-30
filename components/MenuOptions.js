import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
    {
      id: "ecoButton", 
      title: "Eco's",
      image: "https://i.postimg.cc/x1DPWSCp/blue-minimalist-network-logo-design.png",
      screen: "PersonalEcoScreen"
    },
    {
      id: "createEco", 
      title: "Add Event",
      image: "https://i.postimg.cc/V6ChjWHd/blue-minimalist-network-logo-design-1.png",
      screen: "AddEventScreen"
    }, 
    {
        id: "todayEvents", 
        title: "Events",
        image: "https://i.postimg.cc/xjsmvVMN/blue-minimalist-network-logo-design-2.png",
        screen: "todaysEventsScreen"
      }
  ];
const MenuOptions = () => {
  return (
    
    <FlatList
    style = {{marginLeft: 40}}
    data = {data}
    keyExtractor = {(item) => item.id}
    horizontal
    renderItem = {({item}) => (
    <TouchableOpacity style = {{backgroundColor:50, margin: 10, borderRadius: 10 }}>
      <View className = "ml-2 h-30 w-30 p-4 ">
        <Image
        style = {{width: 30, height: 30, resizeMode: "contain", marginLeft: 20}}
        source = {{uri: item.image}}
        />
        <Text className = {"text-center font-Arial"}>
           
           {item.title}
        </Text>
      </View>
    </TouchableOpacity>)}
    />
  
  )
}

export default MenuOptions

