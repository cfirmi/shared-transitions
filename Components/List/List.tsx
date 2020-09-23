import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ListItems from "./ItemList";
import { SharedElement } from "react-navigation-shared-element";

const OuterView = styled.View`
  background: teal;
  width: 100%;
  height: 100%;
`;

const FlatList = styled.FlatList`
  background: whitesmoke;
`;

interface Props {}
const List: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <OuterView>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 30,
          marginVertical: 20,
        }}
      >
        Shared-Transition With Nested Components
      </Text>
      <FlatList
        data={ListItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", { item });
              }}
            >
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <SharedElement id={`item.${item.id}.photo`}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.image_url }}
                  />
                </SharedElement>
                <SharedElement id={`item.${item.id}.text`}>
                  <Text style={{ marginHorizontal: 10, fontSize: 15 }}>
                    {item.name}
                  </Text>
                </SharedElement>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </OuterView>
  );
};

export default List;
