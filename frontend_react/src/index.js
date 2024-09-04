import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiado para adaptarse a React 18
import App from './App';
import './index.css';

// Obtiene el contenedor del DOM donde la app será renderizada.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utiliza el método render de root para montar tu aplicación React.
root.render(<App />);
