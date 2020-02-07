import React, {Component} from 'react';
import { TextInput, View, Text, StyleSheet, Keyboard } from 'react-native'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'Pls type your text',
      typedPassword: ''
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        this.setState(
          () => {
              return { typedPassword: 'Keyboard is show' }
          }
        )
    })

    // this.keyboardDidHideListener

  }

  componentWillUnMount () {
    this.keyboardDidShowListener.remove()
  }

  render() {
    return (
      <View>
          <TextInput style={ styles.textInputStyle }

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


          <Text style= { {margin: 50,  height: 20} } >{this.state.typedPassword}</Text>

          <TextInput style= { styles.textInputStylePassword }
          keyboardType= 'email-address'
          placeholder= 'Enter your password'
          placeholderTextColor= 'gray'
          secureTextEntry= {true}

          onChangeText={
            (text) => {
              this.setState(
                (prevState) => {
                    return {
                    //   typedPassword: text
                    };
                }
              );
            }
          }

          onSubmitEditing={ Keyboard.dismiss}

           />
          { /*
              This's way to comment in react-native
              <TextInput style= { styles.textInputStyle }
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
           */
         }

      </View>
    );
  }
}


var styles = StyleSheet.create({
  textInputStyle: {
    height : 45,
    margin: 50,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  },

  textInputStylePassword: {
    height : 45,
    margin: 50,
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  }

})
