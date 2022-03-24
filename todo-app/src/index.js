import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import todos from './Reducers/todoReducers';

const store = createStore(todos);

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
