import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Fish(props) {
    // let mappedFish = props.fish.map( (fish, id) => 
    //     <View style={styles.animal} key={id}>
    //         <Text>{fish[0]}</Text>
    //         <Text>{fish[1]}</Text> 
    //     </View> 
    // );

    return (
        <View>
            <FlatList
                data={props.fish} // [ ['fish', 200], ...]
                renderItem={({ fish, index }) => 
                    <View style={styles.animal} key={index}>
                        <Text style={styles.words}>{props.fish[index][0]}</Text>
                        <Text style={styles.words}>{props.fish[index][1]}</Text>
                    </View>}
                keyExtractor={(fish, index) => index}
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
})