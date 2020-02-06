import React, {Component} from 'react';
import { TextInput, View, Text } from 'react-native'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'Pls type your text'
    }
  }

  render() {
    return (
      <View>
          <TextInput style={ {
            height : 45,
            margin: 50,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}

          keyboardType= 'email-address'
          placeholder= 'Enter your email'
          placeholderTextColor= 'gray'
          onChangeText={
            (text) => {
              this.setState(
                (prevState) => {
                    return {
                      typedText: text
                    };
                }
              );
            }
          }
          />

          <Text>{this.state.typedText}</Text>
      </View>
    );
  }
}
