import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { normalize } from './Scaling'

export class StandardText extends Component {

  render() {
    return (
      <Text style={styles.styledText}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  styledText: {
    fontSize: normalize(18),
    textAlign: 'justify'
  }
});
