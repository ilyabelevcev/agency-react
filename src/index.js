import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <BrowserRouter>
        <App />         
    </BrowserRouter>
);

reportWebVitals();

        