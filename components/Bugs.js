import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Bugs(props) {
    // let mappedBugs = props.bugs.map( (bug, id) => <div className="animal" key={id}>{bug[0]} <p className="prices">{bug[1]}</p> </div>);
    return (
        <View>
            <FlatList data={props.bugs}
                renderItem={({ bug, index }) =>
                    <View>
                        <Text>{props.bugs[index][0]}</Text>
                        <Text>{props.bugs[index][1]}</Text>
                    </View>
                }
                keyExtractor={(bug, index) => index}
            />
        </View>
    )
}
