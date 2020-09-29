import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route exact path='/about/:age' component={About} />
      <Route exact path='/users' render={(props) => <Users {...props} greetingMessage='Ahoy matey' name='Skarsgaard' />} />
    </BrowserRouter>
  );
}

export default App;
