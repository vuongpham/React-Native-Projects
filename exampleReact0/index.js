/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstScreen from './components/FirstScreen';
import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';
import TextBlink from './components/TextBlink';
import FlexDimension from './components/FlexDimension';
import LoginScreen from './components/LoginScreen';
import Touchable from './components/Touchable';
import BasicFlatList from './components/list/BasicFlatList';

// export default class App extends Component {
//   render() {
//     return (
//       <View style = {styles.container}>
//         <Text style = {styles.firstText} > First </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     backgroundColor: '#28B463',
//   },
//
//   firstText: {
//     margin: 5,
//     color: 'yellow',
//     fontWeight: 'bold',
//     fontSize: 20,
//   }
// })



AppRegistry.registerComponent(appName, () => BasicFlatList);
