// Class based Component

import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component {
  // Obligatory render method
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
        </View>
      );
    }
}

export default AlbumList;
