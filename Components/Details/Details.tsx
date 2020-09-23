import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import DetailsImage from "./DetailsImage";

//props
//hooks
//render props

interface Item {
  id: string;
  first_name: string;
  image_url: string;
}

interface Props {
  // id: string;
  // name: string;
  // ok: boolean;
  // // optional prop
  // okv2?: boolean;
  // number: number;
  // // fn: (params) => return
  // // fn: () => number
  // // fn: () => string
  item: Item;
}

const Details: React.FC<Props> = (Props) => {
  console.log("Props :>> ", Props.route.params.item);
  const item = Props.route.params.item;
  const navigation = useNavigation();

  return (
    <>
      <DetailsImage id={item.id} image_url={item.image_url} name={item.name}/>
    </>
  );
};

export default Details;
