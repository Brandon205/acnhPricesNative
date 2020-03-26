import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function AllPrices(props) {
    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id}>{animal[0]} <p className="prices">{animal[1]}</p></div> );

    return (
        <View>
            <FlatList data={props.all}
                renderItem={({animal, index}) => 
                    <View>
                        <Text>{props.all[index][0]}</Text>
                        <Text>{props.all[index][1]}</Text>
                    </View>
                }
                keyExtractor={(animal, index) => index}
            />
        </View>
    )
}
