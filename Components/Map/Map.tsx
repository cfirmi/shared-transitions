import React, { useState, useEffect, PropsWithChildren } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapItems from "./MapItems";
import CustomMarker from "./CustomMarker";

interface MapItem {
  id: string;
  geometry: {
    latitude: number;
    longitude: number;
  };
  name: string;
  image_url: string;
}

interface Props extends PropsWithChildren<any> {
  markers: MapItem[];
}

const defaultProps: Props = {
  markers: MapItems,
};
const Map: React.FC<Props> = ({ markers }) => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 43.4616042,
          longitude: -80.5035944,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {MapItems.map((marker) => (
          <CustomMarker
           marker={marker}
          />
        ))}
      </MapView>
    </View>
  );
};

Map.defaultProps = defaultProps;

export default Map;

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
