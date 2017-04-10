import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export class Page2_Apprentissage extends Component {

  constructor(){
        super();
        this.state = {
            textValue:'Hello',
            switchValue: false
        }
    }

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


    render(){
        return(
        <View>
          <Text>Apprentissage</Text>
          <Text>
            Je vais vous lire 3 mots : je voudrais que vous me les répétiez et que vous essayiez de les retenir
            car je vous les redemanderai tout à l'heure.
          </Text>
        </View>
        );
    }
}
