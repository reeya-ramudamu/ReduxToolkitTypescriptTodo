

import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from '../features/todo/todoSlice';
import { RootState } from '../app/store';


const EditTodo = () => {
  const { id } = useParams();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const todo = todos.find(todo => todo.id === id);
  const [editedText, setEditedText] = useState(todo ? todo.text : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    if (editedText.trim() !== '' && id) {
      dispatch(updateTodo({
        id,
        newText: editedText,
      }));
      navigate('/'); // Redirect back to Todos page after saving
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect back to Todos page without saving
  };

  if (!todo) {
    return <div>Loading...</div>; // Handle loading state or not found case
  }
  return (
    <div>
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTodo;