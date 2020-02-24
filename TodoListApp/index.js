/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore()
const App = () => {
  <Provider store={store}>
  </Provider>
}


AppRegistry.registerComponent(appName, () => App);
