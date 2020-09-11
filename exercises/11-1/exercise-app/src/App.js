import React from 'react';
import logo from './logo.svg';
import './App.css';

const arrOfTasks = ['lavar a louça', 'varrer o chão', 'arrumar o quarto'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
  <ul>{arrOfTasks.map((arrTask) => <li>{arrTask}</li>)}</ul>
  );
}

export default App;
