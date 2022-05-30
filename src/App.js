import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

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
