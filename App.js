import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fish from "./components/Fish";
import Bugs from "./components/Bugs";
import AllPrices from "./components/AllPrices";

export default function App() {
  return (
    <>
    <Text>Animal Crossing New Horizons Prices</Text>
      <AllPrices />
      <Fish />
      <Bugs />
    </>
  );
};

const styles = StyleSheet.create({

});
