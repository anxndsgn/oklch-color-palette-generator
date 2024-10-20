import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorProvider } from './context/colorContext';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>,
);
