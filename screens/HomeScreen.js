import { View, Text, Image, Button } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"; 
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import HomeMap from '../components/HomeMap';
import MapView from 'react-native-maps';
import MenuOptions from '../components/MenuOptions';
import TabBar from '../components/TabBar';



const HomeScreen = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false,
  })        
  })
  return (
    <SafeAreaView>
      <View className = "flex-row pb-3 pt-2  mx-4 ">
        <Image className = "h-7 w-20 p-3 mr-52"
        source = {{
          uri : "https://i.postimg.cc/qgHBZ9Tc/final-logo.png",
        }}
        
        />
        <NavOptions/>
       
        
        
      </View> 
      <View className = "rounded-full mx-3">
      <GooglePlacesAutocomplete 
        nearbyPlacesAPI= "GooglePlacesSearch"
        debounce = {20}
        placeholder = "Search"
        styles = {{
          container: {
            flex: 0, 
            
          }, 
          textInput: {
            fontSize: 18, 
        
          },
        }}
        minLength = {2}
        fetchDetails = {true}
        returnKeyType = {"search"}
        enablePoweredByContainer = {false}
        onPress = {(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location, 
              decription: data.description, 
            })
          );
         dispatch(setDestination(null));
        }}
        query = {{
            key: GOOGLE_MAPS_APIKEY, 
            language: "en", 

          }}
          

        
        />
        
      </View>
    
    <View style = {{height: '83%', marginBottom: 1}}>
      <HomeMap/>
    </View>
    <View>

    </View>


    <View style = {{height: '5%', flexGrow: 1}}>
    <TabBar/>
    </View>
    
    
    

    </SafeAreaView>
     
    
  )
}

export default HomeScreen