/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { PagerNavigation } from './composants_catamania/PagerNavigation';

export default class airpm extends Component {

  move = (delta) => {

  };

  render() {
    return (
      <PagerNavigation />
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {

  }
});

AppRegistry.registerComponent('airpm', () => airpm);
