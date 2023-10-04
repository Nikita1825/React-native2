import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native";
import  { Marker } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
export const MapScreen = ({location}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        mapType="terrain"
        minZoomLevel={0}
        region={{
          latitude: 46.1173,
          longitude: 32.9207,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 46.1173,
            longitude: 32.9207,
          }}
       
          description=""
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
