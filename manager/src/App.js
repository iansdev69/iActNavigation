/**
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginFrom from './components/LoginFrom'
import Router from './Router';



import { 
  Header, 
  Button, 
  Spinner,
  Card,
  CardSection
} from './components/common';


type Props = {};

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires'
]);

export default class App extends Component<Props> {
 
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBs10AdhadFzv2e45XutBIIXf0pmM6FmCc",
      authDomain: "manager-d2cbe.firebaseapp.com",
      databaseURL: "https://manager-d2cbe.firebaseio.com",
      projectId: "manager-d2cbe",
      storageBucket: "manager-d2cbe.appspot.com",
      messagingSenderId: "724544557723"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
  }
}
