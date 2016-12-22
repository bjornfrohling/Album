/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import libraries
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create Component (function that retuns jsx)
const App = () => {
  return (
    // jsx
    // Component nesting
    <Header headerText={'Albums!!'}/>
  );
};

// Render it on the device
AppRegistry.registerComponent('albums', () => App)
