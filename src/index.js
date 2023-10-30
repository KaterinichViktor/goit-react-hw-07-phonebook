import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux'; // Import the Provider
import { store } from './Redux/store'; // Import your Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
