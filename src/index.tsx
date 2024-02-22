import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {CarContainer} from "./components/carContainer/CarContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <CarContainer/>
);