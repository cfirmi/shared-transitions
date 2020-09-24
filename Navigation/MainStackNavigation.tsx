import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Details from '../Components/Details/Details';
import List from '../Components/List/List';
import Map from '../Components/Map/Map';
import DetailsMap from '../Components/DetailsMap/DetailsMap'


const Stack = createSharedElementStackNavigator<SharedStackParams>();

type SharedStackParams = {
  List: undefined;
  Detail: undefined;
  Map: undefined;
};


const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen
          name="Detail"
          component={Details}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              { id: `item.${item.id}.photo` },
              { id: `item.${item.id}.text` }
            ];
          }}
        />
        <Stack.Screen
          name="DetailMap"
          component={DetailsMap}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              { id: `item.${item.id}.photo` },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
