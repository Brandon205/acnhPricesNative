import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function AllPrices(props) {
    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id}>{animal[0]} <p className="prices">{animal[1]}</p></div> );

    return (
        <View>
            <FlatList data={props.all}
                renderItem={({animal, index}) => 
                    <View style={styles.animal}>
                        <Text style={styles.words}>{props.all[index][0]}</Text>
                        <Text style={styles.words}>{props.all[index][1]}</Text>
                    </View>
                }
                keyExtractor={(animal, index) => index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animal: {
        fontSize: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    words: {
        fontSize: 25,
        padding: 10
    }
});
