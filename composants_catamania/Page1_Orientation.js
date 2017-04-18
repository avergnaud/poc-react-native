import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import { StandardText } from './StandardText';
import { TitleText } from './TitleText';
import { normalize } from './Scaling'

/*
Métier : première page de l'application...
*/
export class Page1_Orientation extends Component {

  constructor(){
        super();
        this.state = {
            textValue:'En quelle année sommes-nous ?',
            switchValue: false
        }
        /* pour l'affichage de la date du jour */
        moment.locale('fr');
    }

    /* Pour le TextInput */
    onChangeText(value){
        this.setState({
            textValue:value
        });
    }
    onSubmit(){
        console.log('Input Submitted...');
    }
    onSwitchChange(value){
        this.setState({
            switchValue:value
        });
    }

    /* Affichage du composant */
    render(){
        return(
        <View style={styles.containerGlobal}>
          <View style={styles.ligne}>
            <TitleText>Orientation</TitleText>
          </View>
          <View style={styles.ligne}>
            <StandardText>
            Je vais vous poser quelques questions pour apprécier comment fonctionne votre mémoire. Les unes sont très simples, les autres un peu moins. Vous devez répondre du mieux que vous pouvez.
            </StandardText>
          </View>
          <View style={styles.ligneQuestionContainer}>
            <View style={styles.question}>
              <StandardText>Quelle est la date complète d''aujourd hui ?
              ({moment().format('dddd DD MMMM YYYY')})</StandardText>
            </View>
            <View style={styles.reponse}>
              <Switch
                value={this.state.switchValue}
                onValueChange={(value) => this.onSwitchChange(value)}
                />
            </View>
          </View>
          {/* En quelle année */}
          <View style={styles.ligneQuestionContainer}>
            <View style={styles.question}>
              <TextInput
              placeholder="Enter Text"
              keyboardType="numeric"
              value={this.state.textValue}
              onChangeText={(value) => this.onChangeText(value)}
              onSubmitEditing={this.onSubmit}
              />
            </View>
            <View style={styles.reponse}>
            </View>
          </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    flexDirection: 'column',
    /*justifyContent: 'space-around',*/
    justifyContent: 'space-between',
  },
  ligne: {
    flex: 1,
  },
  ligneQuestionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  question: {
    flex: 4,
    height: normalize(50),
  },
  reponse: {
    flex: 1,
    height: normalize(50),
  }
});
