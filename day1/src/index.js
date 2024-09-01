import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Thank from './DAY-1CW-1';
import Work from './DAY-1CW-2';
import Harish from './DAY-1CY-1';
import Team from './DAY-1PH-1';
import Hello from './DAY-1PH-2';
import App from './DAY-2CW-1';
import Message from './DAY-2CW-2';
import Forms from './DAY-2PH-1';
import Pree from './DAY-2CY-1';
import Car from './DAY-2DC-1';
import ToggleMessage from './DAY-3CW-1';
import Weather from './DAY-3CY-1';
import Mode from './DAY-3DC-1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Thank/> 
    {/* <Work/> */}
{/* <Harish/> */}
{/* <Team/> */}
{/* <Hello/> */}
{/* <App/> */}
{/* <Message/> */}
{/* <Forms/> */}
{/* <Pree/> */}
{/* <Car/> */}
{/* <ToggleMessage/> */}
{/* <Weather/> */}
{/* <Mode/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();