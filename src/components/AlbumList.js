// Class based Component

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

// life cycle method
  componentWillMount() {
    // Will be executed before component appears on screen
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  // Obligatory render method
  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
        </View>
      );
    }
}

export default AlbumList;
