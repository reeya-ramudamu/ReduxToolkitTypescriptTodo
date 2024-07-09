import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTodo } from "../features/todo/todoSlice";
import { RootState } from "../types/data";
import { useForm, SubmitHandler } from "react-hook-form";
import { EditedInput } from "../types/data";

const EditTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditedInput>();
  const { id } = useParams();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const todo = todos.find((todo) => todo.id === id);
  const [editedText, setEditedText] = useState(todo ? todo.text : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave: SubmitHandler<EditedInput> = (data) => {
    if (data.neweditedtext.trim() !== "" && id) {
      dispatch(
        updateTodo({
          id,
          newText: data.neweditedtext,
        })
      );
      navigate("/"); // Redirect back to Todos page after saving
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect back to Todos page without saving
  };

  if (!todo) {
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit(handleSave)} className="editTodo">
      <h2>Edit Todo</h2>
      <input
        {...register("neweditedtext", {
          required: "Enter some activity",
          minLength: { value: 3, message: "Define the activity" },
          maxLength: { value: 30, message: "Keep it short and descriptive" },
        })}
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      {errors.neweditedtext && <p>{errors.neweditedtext.message}</p>}

      <div className="btn-container">
        <button type="submit" className="save">
          Save
        </button>
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
