import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NewsProvider from './store/NewsProvider.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
    <App />
    </NewsProvider>
  </React.StrictMode>,
)