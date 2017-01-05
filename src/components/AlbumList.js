// Class based Component

import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };

// life cycle method
  componentWillMount() {
    // Will be executed before component appears on screen
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // Obligatory render method
  render() {
    console.log(this.state);

    return (
      <View style={styles.viewStyle}>
        {this.renderAlbums()}
        </View>
      );
    }
}

const styles = {
  viewStyle: {
    marginTop: 10
  }
}

export default AlbumList;
