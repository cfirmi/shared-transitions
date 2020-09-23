import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MainStackNavigation from './Navigation/MainStackNavigation'

const OuterView = styled.View`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <OuterView >
      <MainStackNavigation />
    </OuterView>
  );
}

