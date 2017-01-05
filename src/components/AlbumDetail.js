import React from 'react'
import {View, Text} from 'react-native'

const AlbumDetail = ({ album }) => {
        console.log(album.title);

    return (
        <View>
            <Text>{album.title} </Text>
        </View>
    );
};

export default AlbumDetail

