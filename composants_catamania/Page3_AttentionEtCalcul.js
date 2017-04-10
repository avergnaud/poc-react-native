import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export class Page3_AttentionEtCalcul extends Component {

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
          <Text>Attention et calcul</Text>
          <Text>
            Voulez-vous compter à partir de 100 en retirant 7 à chaque fois ?
          </Text>
        </View>
        );
    }
}
