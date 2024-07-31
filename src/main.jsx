import React from 'react';
import ReactDOM from 'react-dom';
import Citizens from './components/Citizens'; // Adjust the path as needed
import './App.css'; // Import global styles if any

// Render the Citizens component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <Citizens />
  </React.StrictMode>,
  document.getElementById('root') // Ensure there's a div with id="root" in your HTML
);
