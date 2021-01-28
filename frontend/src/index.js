import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Router, Route, browserHistory } from 'react-router';
>>>>>>> parent of 9143539... Add Redux
=======
import { Provider } from 'react-redux';
>>>>>>> parent of 4f9297f... Merge branch 'main' of https://github.com/michalKoczewski/React-frontend-social-networking-site into main
=======
import { Provider } from 'react-redux';
>>>>>>> parent of 4f9297f... Merge branch 'main' of https://github.com/michalKoczewski/React-frontend-social-networking-site into main
import './index.css';
import App from './App';
import store from './store';


ReactDOM.render(  
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector('#root')
);

