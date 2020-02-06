import React , { Component }  from 'react';
import { View } from 'react-native';


export default class FlexDimension extends Component {

  render(){
    return (
      <View style= { {flex: 1} }>
        <View style= {{flex: 10, backgroundColor: 'blue'}} />
        <View style= {{flex: 20, backgroundColor: 'red'}} />
        <View style= {{flex: 70, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}
