import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Fish from "./components/Fish";
import Bugs from "./components/Bugs";
import AllPrices from "./components/AllPrices";

import fishList from "./components/fish.json";
import bugList from "./components/bugs.json";
import allList from "./components/allAnimals.json";

export default function App() { 
  let fishArray = Object.entries(fishList);
  let allArray = Object.entries(allList);
  let bugArray = Object.entries(bugList);

  const [selected, setSelected] = useState('All Prices');
  const [filterValue, setFilterValue] = useState('');
  const [fishes, setFishes] = useState(fishArray);
  const [bugsAndFish, setBugsAndFish] = useState(allArray);
  const [bugs, setBugs] = useState(bugArray);

  let filteredList = "";
  let handleFilterChange = (text) => {
    console.log(text);
    if (selected === "All Prices") { //set the props for the thing to render to the filtered list
      filteredList = allArray.filter(animal => animal[0].toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Fish") {
      filteredList = fishArray.filter(fish => fish[0].toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      setFishes(filteredList);
    } else if (selected === "Bugs") {
      filteredList = bugArray.filter(bug => bug[0].toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      setBugs(filteredList);
    }
    setFilterValue(text);
  }

  let content;
  switch(selected) {
    case 'All Prices':
      content = ( <AllPrices all={bugsAndFish} /> );
      break;
    case 'Fish':
      content = ( <Fish fish={fishes} /> );
      break;
    case 'Bugs':
      content = ( <Bugs bugs={bugs} /> );
      break;
    default: 
    content = ( <AllPrices all={bugsAndFish} /> );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Animal Crossing New Horizons Prices</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={selected === 'Fish' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('Fish')}><Text>Fish</Text></TouchableOpacity>
        <TouchableOpacity style={selected === 'All Prices' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('All Prices')}><Text>All Prices</Text></TouchableOpacity>
        <TouchableOpacity style={selected === 'Bugs' ? styles.tabBkg : styles.tabs} onPress={() => setSelected('Bugs')}><Text>Bugs</Text></TouchableOpacity>
      </View>
      <TextInput autoCompleteType="off" autoCorrect={false} onChangeText={(text) => handleFilterChange(text)} value={filterValue} placeholder="Search Here" />
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
    flex: 1
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
