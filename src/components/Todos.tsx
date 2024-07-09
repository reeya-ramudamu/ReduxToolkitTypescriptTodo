import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTodo } from "../features/todo/todoSlice";
import { RootState } from "../types/data";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/todo/${id}`);
  };
  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  if (!Array.isArray(todos)) {
    console.error("todos is not an array", todos);
    return null;
  }

  return (
    <div className="todosList">
      <div className="todos-header">Todo-Lists</div>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <div className="buttons">
              <button
                className="update-button"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="remove-button"
                onClick={() => handleRemove(todo.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
