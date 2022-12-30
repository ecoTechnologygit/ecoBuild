import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { maxSatisfying } from 'react-devtools-core';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });


  const [collapsed, setCollapsed] = useState(true);


  useEffect(() => {
    (async () => {
      // Request location permission when the app is in the foreground
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;
        setLocation({ latitude, longitude });
      }
    })();
  }, []);

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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        draggable
        onPanDrag={() => setCollapsed(true)}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.009000009,
          longitudeDelta: 0.0090000091,
        }}
      >
        <Marker
          coordinate={location}
          title='My Location'
          description='This is my current location'

        />
      </MapView>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setCollapsed(!collapsed)} style={styles.button}>

          <View style={{ marginLeft: 10, backgroundColor: "#C0C0C0", borderRadius: 20, padding: 14 }}>

            <Image className="h-7 w-7 align-middle center"
              source={{ uri: 'https://i.postimg.cc/dtCHxnh8/menu.png' }}
            />
          </View>

        </TouchableOpacity>
        <FlatList
          style={{ height: collapsed ? 0 : 'auto' }}
          styles={styles.list}
          data={data}
          keyExtractor={(item) => item.id}
          vertical
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <View className="h-20 w-20 align-middle center pt-3 pl-2">
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain", marginLeft: 20 }}
                  source={{ uri: item.image }}
                />
                <Text className={"text-center font-Arial"}>

                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>)}
          collapsable={collapsed}


        />
      </View> */}
      {/* Collapsible Flat List */}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#10',
    margin: 10,
    borderRadius: 20,
  },
  list: {

    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  item: {
    backgroundColor: '#C0C0C0',

    borderRadius: 30,
    marginTop: 10
  },
  itemContainer: {
    marginLeft: 20,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  itemText: {
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});

export default Map;