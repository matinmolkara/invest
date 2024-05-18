import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.css'
import './styles/pages.css'
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);


