import React from 'react';
import {Text} from 'react-native';
import Card from './Card';

const AlbumDetail = ({ album }) => {
        console.log(album.title);

    return (
        <Card>
            <Text>{album.title} </Text>
        </Card>
    );
};

export default AlbumDetail

