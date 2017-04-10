import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export class Page4_Rappel extends Component {

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
          <Text>Rappel</Text>
          <Text>
            Pouvez-vous me dire quels étaient les 3 mots que je vous ai demandés de répéter et de retenir tout à 
l'heure ?
          </Text>
        </View>
        );
    }
}
