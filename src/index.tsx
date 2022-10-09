import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import reducers from './Reducers/index';
import middlewares from './Middlewares/index';
import {Provider} from "react-redux";

const Store = createStore(reducers, middlewares)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={Store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
);
