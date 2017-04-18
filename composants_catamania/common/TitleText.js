import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { normalize } from './Scaling'

export class TitleText extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.styledText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: normalize(30),
  },
  styledText: {
    fontSize: normalize(36),
  }
});
