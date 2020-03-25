import React from 'react';
import { View, Text } from 'react-native';

export default function Fish() {
    let mappedFish = props.fish.map( (fish, id) => <div className="animal" key={id}>{fish[0]} <p className="prices">{fish[1]}</p></div> );

    return (
        <View>
            <Text>Fish!</Text>
        </View>
    )
}
