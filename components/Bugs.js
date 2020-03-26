import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Bugs(props) {
    // let mappedBugs = props.bugs.map( (bug, id) => <div className="animal" key={id}>{bug[0]} <p className="prices">{bug[1]}</p> </div>);
    return (
        <View>
            <FlatList data={props.bugs}
                renderItem={({ bug, index }) =>
                    <View style={styles.animal}>
                        <Text style={styles.words}>{props.bugs[index][0]}</Text>
                        <Text style={styles.words}>{props.bugs[index][1]}</Text>
                    </View>
                }
                keyExtractor={(bug, index) => index}
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
