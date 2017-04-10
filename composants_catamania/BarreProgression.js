import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export class BarreProgression extends Component {
  render() {
    var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
    var progressBarSize = (fractionalPosition / (this.props.pages - 1)) * this.props.size;
    return (
      <View style={[styles.progressBarContainer, {width: this.props.size}]}>
          <Text>{this.props.progress.position} {this.props.progress.offset} -- {fractionalPosition} / {this.props.pages - 1} * {this.props.size}</Text>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={[styles.linearGradient, {width: progressBarSize}]}>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 25,
    margin: 10,
    borderRadius: 4,
    backgroundColor: '#f5f5f5'
  },
    linearGradient: {
      alignSelf: 'flex-start',
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 4,
      borderColor: '#245580',
    },
});
