import React from 'react';
import { View, Text } from 'react-native';

export default function Bugs() {
    let mappedBugs = props.bugs.map( (bug, id) => <div className="animal" key={id}>{bug[0]} <p className="prices">{bug[1]}</p> </div>);

    return (
        <View>
            <Text>Bugs!</Text>
        </View>
    )
}
