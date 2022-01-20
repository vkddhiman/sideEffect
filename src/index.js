import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextsProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContextsProvider>
    <App />
  </AuthContextsProvider>
  , document.getElementById('root')
);
