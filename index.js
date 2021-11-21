/**
 * @format
 */
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import FetchDemoPage from './js/FetchDemoPage';
import LoginPage from './js/page/LoginPage';
import NavigationDemoPage from './js/page/NavigationDemoPage';
import AppNavigators from './js/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => AppNavigators);
