import './App.css';
import { ComponentA } from './components/component-a';
import { ComponentB } from './components/component-b';

function App() {
  return (
    <div className="App">
      <ComponentA>
        <ComponentB />
        <ComponentB />
        <ComponentB />
      </ComponentA>
    </div>
  );
}

export default App;
