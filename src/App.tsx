
import { Routes, Route, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';
import './App.css'
import React from 'react';


const App: React.FC =() => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todo List</Link>
          </li>
          <li>
            <Link to="/add">Add Todo</Link>
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;










