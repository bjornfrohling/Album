// Class based Component

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

// life cycle method
  componentWillMount() {
    // Will be executed before component appears on screen
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }

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
