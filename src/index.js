import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import styles from './style.css';

document.addEventListener('DOMContentLoaded', function(e) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
});
