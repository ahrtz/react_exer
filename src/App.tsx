import React from 'react';
import logo from './logo.svg';

import './App.scss'
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>For Exer</h1>
      </header>

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  );
}

export default App;
