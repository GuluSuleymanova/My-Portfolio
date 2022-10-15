import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/sass/style.css'
import AppRouter from './router/AppRouter';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  
);


