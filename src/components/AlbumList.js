// Class based Component

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // class level property
  state = {
    albums: []
  };

  // life cycle method
  componentWillMount() {
    // Will be executed before component appears on screen

    fetch('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      return response.json()
    }).then((responseData) => {
      return responseData;
    }).then((data) => {
      console.log(data);
      this.setState({albums: data});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderAlbums() {
    return this
      .state
      .albums
      .map(album => <AlbumDetail key={album.title} album={album}/>);
  }

  // Obligatory render method
  render() {
    console.log(this.state);

    return (
      <ScrollView style={styles.viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 10
  }
}

export default AlbumList;
