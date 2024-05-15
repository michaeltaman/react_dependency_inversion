import React from 'react';
import './App.css';
import {ComponentA} from './components/component-a';
import { ComponentB } from './components/component-b';

function App() {
  return (
    <div className="App">
      <ComponentA Component={ComponentB}/>
    </div>
  );
}

export default App;
