import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
const OuterView = styled.View`
  align-items: center;
  justify-content: center;
`;

interface Props {
  id: string;
  image_url: string;
  name: string;
}

const DetailsImage: React.FC<Props> = ({ id, image_url, name }) => {

  const windowWidth = Dimensions.get('window').width;
  return (
    <OuterView>
      <SharedElement id={`item.${id}.photo`}>
        <Image
          style={{ width: windowWidth, height: 150, marginTop: 10, marginBottom: 20 }}
          source={{ uri: image_url }}
        />
      </SharedElement>
      <SharedElement id={`item.${id}.text`}>
        <Text style={{ fontSize: 25, textAlign: "center" }}>{name}</Text>
      </SharedElement>
    </OuterView>
  );
};

export default DetailsImage;
