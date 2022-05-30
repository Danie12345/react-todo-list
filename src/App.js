import './App.css';
import React from 'react';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <TodoContainer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
