import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { makeServer } from 'src/miragejs/server';
import { store } from 'src/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  makeServer({ environment });
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
