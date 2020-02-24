import React, {Component} from 'react';
import { Text, View, FlatList, StyleSheet, Image, Alert } from 'react-native';


// LifeCycle of a component in React-native.
//
// The first time constructor() -> componentWillMount -> render -> componentDidlMount
// When the state change will reRender:  shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class LifeCycle extends Component {

  // Run the first time. Just one time
  constructor(props) {
    super(props)
    console.console.log('${Date.now}. This is constructor');
    this.state = {
      numberOfRefresh: 0
    };
  }

  // Run just one time
  componentWillMount(){
    //
    onsole.console.log('${Date.now}. This is componentWillMount');
  }

  // Run when props change state
  shouldComponentUpdate(){

  }

  // Run when props change state
  componentWillUpdate(){

  }

  render() {
    return()
  }
  // Run after render completely
  componentDidUpdate(){

  }
  // Run just one time
  componentDidMount(){
    onsole.console.log('${Date.now}. This is componentDidMount');
  }
}
