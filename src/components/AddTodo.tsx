
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'
import './AddTodo.css'; // Import the CSS file

const AddTodo: React.FC =() => {
    const [input, setInput] = useState('');
    const[message, setmessage]= useState('');
   
    const dispatch = useDispatch();

    const addTodoHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== '') {
            dispatch(addTodo(input));
            setInput('');
            setmessage('Todo added to list');
        }else{
            setmessage('Enter some activity');
        }
        
    };

    return (
    <>
        <form 
         onSubmit={addTodoHandler} 
         className="form-container">
            <div>
            <input
                type="text"
                className='input-field'
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className='submit-button'>
                Add Todo
            </button>
                
            </div>
            
           
            
        </form>
         <div>{message && <p className="message">{message}</p>}</div>
    </>
  );
}

export default AddTodo;