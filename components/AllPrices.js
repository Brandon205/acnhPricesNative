import React from 'react';
import { View, Text } from 'react-native';

export default function AllPrices() {
    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id}>{animal[0]} <p className="prices">{animal[1]}</p></div> );

    return (
        <View>
            <Text>AllPrices!</Text>
        </View>
    )
}
