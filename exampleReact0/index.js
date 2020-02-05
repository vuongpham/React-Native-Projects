/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstScreen from './components/FirstScreen';
import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';


AppRegistry.registerComponent(appName, () => MultipleGreetings);
