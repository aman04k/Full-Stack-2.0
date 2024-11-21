import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './redux/store'; // Import Store
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
