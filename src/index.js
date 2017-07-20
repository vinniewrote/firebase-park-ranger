import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBsS0qdFQkJOJXSCVSJ2C05nzUruMaI05Q",
  authDomain: "park-ranger-db.firebaseapp.com",
  databaseURL: "https://park-ranger-db.firebaseio.com",
  projectId: "park-ranger-db",
  storageBucket: "park-ranger-db.appspot.com",
  messagingSenderId: "927027694347"
};

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
