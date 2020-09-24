import React from "react";
import styled from "styled-components/native";
import { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

const OuterView = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
`;

interface LatLng {
  latitude: number;
  longitude: number;
}
interface Props {
  marker: {
    id: string;
    geometry: LatLng;
    image_url: string;
  };
}

const CustomMarker: React.FC<Props> = ({ marker }) => {
  const navigation = useNavigation();
  console.log("OuterView :>> ", marker);
  return (
    <Marker
      coordinate={marker.geometry}
      identifier={"1234"}
      onPress={() => {
        navigation.navigate("DetailMap", { item: marker });
      }}
      tracksInfoWindowChanges={false}
    >
      <OuterView>
        <SharedElement id={`item.${marker.id}.photo`}>
          <Image source={{ uri: marker.image_url }} />
        </SharedElement>
      </OuterView>
    </Marker>
  );
};

export default CustomMarker;
