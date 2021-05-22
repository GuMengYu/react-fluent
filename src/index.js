import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initializeIcons} from '@fluentui/react'
import { mergeStyles } from '@fluentui/react';

initializeIcons();

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
