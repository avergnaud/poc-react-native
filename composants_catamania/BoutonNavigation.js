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
Boutons précédent et suivant
*/
export class BoutonNavigation extends Component {
  _handlePress = () => {
    if (this.props.enabled && this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View style={[styles.buttonContainer, this.props.enabled ? {} : styles.buttonDisabled]}>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              {this.props.text}
            </Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: normalize(150),
    height: normalize(50),
  },
    linearGradient: {
      flex: 1,
      paddingLeft: normalize(15),
      paddingRight: normalize(15),
      borderRadius: 5,
      borderColor: '#245580',
    },
    buttonText: {
      fontSize: normalize(18),
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: normalize(10),
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    buttonDisabled: {
      opacity: 0.5,
    },
});
