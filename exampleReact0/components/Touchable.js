import React, {Component} from 'react';
import { Alert, View, StyleSheet,
   Image, Text, TouchableHightlight,
  TouchableNativeFeeback, TouchableOpacity,
  TouchableWithoutFeedback } from 'react-native';


  export default class Touchable extends Component {

    _onPressButton = (event) => {
      //  alert("You press the button")

        let logData = `Click at x y`
        console.log(logData)
    }

    render(){
        return (
          <View style = { {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

              <TouchableWithoutFeedback onPress= {this._onPressButton} >
                  <View style= {{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'blue'}} >
                      <Text style = {{ color: 'white', textAlign: 'center'}} > sd asd </Text>
                    </View>

               </TouchableWithoutFeedback>

          </View>
        );
    }
  }
