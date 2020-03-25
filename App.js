import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
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
      content = ( <AllPrices fish={'hi'} /> );
      break;
    case 'Fish':
      content = ( <Fish fish={'hi'} /> );
      break;
    case 'Bugs':
      content = ( <Bugs fish={'hi'} /> );
      break;
    default: 
    content = ( <AllPrices fish={'hi'} /> );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Animal Crossing New Horizons Prices</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={selected === 'Fish' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('Fish')}><Text>Fish</Text></TouchableOpacity>
        <TouchableOpacity style={selected === 'All Prices' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('All Prices')}><Text>All Prices</Text></TouchableOpacity>
        <TouchableOpacity style={selected === 'Bugs' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('Bugs')}><Text>Bugs</Text></TouchableOpacity>
      </View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 45
  },
  container: {
    textAlign: "center",
  },
  buttons: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  tabs: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FDE46A",
    backgroundColor: "#C52D28",
    width: "33%",
    height: "80%",
    borderColor: "black",
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBkg: {
    backgroundColor: "rgb(177, 13, 7)",
    width: "33%",
    height: "95%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FDE46A",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
