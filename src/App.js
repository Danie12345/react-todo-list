import './App.css';
import React from 'react';
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import { HashRouter as Router } from "react-router-dom"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <TodoContainer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
