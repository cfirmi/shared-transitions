import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Details from '../Components/Details/Details';
import List from '../Components/List/List';


const Stack = createSharedElementStackNavigator<SharedStackParams>();

type SharedStackParams = {
  List: undefined;
  Details: {
    id: number;
    src: string;
  };
};


const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={List} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
