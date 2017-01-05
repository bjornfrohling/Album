/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://github.com/StephenGrider/ReactNativeReduxCasts
 */

// Import libraries
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create Component (function that retuns jsx)
const App = () => {
  return (
    // jsx
    // Component nesting
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it on the device
AppRegistry.registerComponent('albums', () => App)
