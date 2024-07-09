import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Inputs } from "../types/data";

const AddTodo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();

  const addTodoHandler: SubmitHandler<Inputs> = (data) => {
    if (data.exampleRequired.trim() !== "") {
      dispatch(addTodo(data.exampleRequired));
      setInput("");
      setMessage("Todo added to list");
      setMessageColor("message-success");
      setShowMessage(true);

      setTimeout(() => {
        setMessage("");
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(addTodoHandler)} className="form-container">
        <div className="form-content">
          <div className="add-todo">
            <span className="heading">Add new todo list</span>
            <div>
              <input
                {...register("exampleRequired", {
                  required: "Enter some activity",
                  minLength: { value: 3, message: "Define the activity" },
                  maxLength: {
                    value: 30,
                    message: "Keep it short and descriptive",
                  },
                })}
                type="text"
                className="input-field"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setMessage("");
                }}
              />
              <div>
                {errors.exampleRequired && (
                  <p>{errors.exampleRequired.message}</p>
                )}
                <p
                  className={`message ${messageColor} ${
                    showMessage ? "message-appear" : ""
                  }`}
                >
                  {message}
                </p>
              </div>
            </div>
            <div>
              <button type="submit" className="submit-button">
                Add Todo
              </button>
            </div>
          </div>
          <div className="view">
            <Link to="/">View Lists</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
