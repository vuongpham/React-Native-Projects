import React , { Component }  from 'react';
import { Text } from 'react-native';

export default class FirstScreen extends Component {
  render(){
    //let greeting =  Hi there!!";
    let greeting = `


      Hello there !! `;
    return (
      <Text> { greeting } </Text>
    );
  }
}
