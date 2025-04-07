import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Notice 'client' here
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
