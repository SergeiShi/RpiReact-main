import  * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
    rentalOffersCount={Setting.rentalOffersCount }/>
  </React.StrictMode>
);