import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { normalize } from './Scaling'
import LinearGradient from 'react-native-linear-gradient';

/*
Affichée en bas du pager
*/
export class BarreProgression extends Component {
  render() {
    var progressBarSize = (this.props.pageCourante / (this.props.pages)) * this.props.size;
    return (
      <View style={[styles.progressBarContainer, {width: this.props.size}]}>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={[styles.linearGradient, {width: progressBarSize}]}>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: normalize(25),
    margin: normalize(10),
    borderRadius: normalize(4),
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
