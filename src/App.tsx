import { Routes, Route, Link } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";

import React from "react";
const App: React.FC = () => {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/" element={<Todos />} />
        </Routes>
        <div className="add">
          <Link to="/add">+</Link>
        </div>
      </div>
    </>
  );
};

export default App;
