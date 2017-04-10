import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export class Page1_Orientation extends Component {

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
          <Text>Orientation</Text>
          <Text>
            Je vais vous poser quelques questions pour apprécier comment fonctionne votre mémoire.
            Les unes sont très simples, les autres un peu moins.
            Vous devez répondre du mieux que vous pouvez.
          </Text>
            <Text>Quelle est la date complète d aujourd hui ? </Text>
              <Text>React native date picker</Text>
          <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          />
          <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}
          />
            {/*


              */}
        </View>
        );
    }
}
