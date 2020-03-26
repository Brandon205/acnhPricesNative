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
                    <View key={index}>
                        <Text key={index}>{props.fish[index][0]}</Text>
                        <Text>{props.fish[index][1]}</Text>
                    </View>}
                keyExtractor={(fish, index) => index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animal: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})