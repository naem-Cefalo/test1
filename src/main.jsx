import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Case01 from './case01/case01.jsx';
import Case02 from './case02/case02.jsx';
import Case03 from './case03/case03.jsx';
import Case04 from './case04/Case04.jsx';
import Case05 from './case05/Case05.jsx';
import Case06 from './case06/Case06.jsx';
import Case07 from './case07/Case07.jsx';
import Case08 from './case08/Case08.jsx';
import Case09 from './case09/Case09.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
