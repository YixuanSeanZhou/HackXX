import firebase from 'firebase';
import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router.js';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC-9GFO3QA4TX9W9rF5rfb82fN-pAk-4_g",
      authDomain: "hackxx-e8bbe.firebaseapp.com",
      databaseURL: "https://hackxx-e8bbe.firebaseio.com",
      projectId: "hackxx-e8bbe",
      storageBucket: "hackxx-e8bbe.appspot.com",
      messagingSenderId: "645272065557"
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
