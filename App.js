import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fish from "./components/Fish";
import Bugs from "./components/Bugs";
import AllPrices from "./components/AllPrices";

import fishList from "./components/fish.json";
import bugList from "./components/bugs.json";
import allList from "./components/allAnimals.json";

export default function App() { 
  const [selected, setSelected] = useState('All Prices');

  let content;
  switch(selected) {
    case 'All Prices':
      content = ( <AllPrices fish={} /> );
      break;
    case 'Fish':
      content = ( <Fish fish={} /> );
      break;
    case 'Bugs':
      content = ( <Bugs fish={} /> );
      break;
    default: 
    content = ( <AllPrices fish={} /> );
  }
  return (
    <>
    <Text>Animal Crossing New Horizons Prices</Text>
    {content}
    </>
  );
};

const styles = StyleSheet.create({

});
