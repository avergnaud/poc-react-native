import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export class Page5_Langage extends Component {

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
          <Text>Langage</Text>
        </View>
        );
    }
}
