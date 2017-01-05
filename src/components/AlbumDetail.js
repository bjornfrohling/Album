import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) => {
        console.log(album.title);

    return (
        <Card>
            <CardSection>
                <View>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{album.title} </Text>
                    <Text>{album.artist} </Text>
                </View>
            </CardSection>
        </Card>
    );
}; 

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail

