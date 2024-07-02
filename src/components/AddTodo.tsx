
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'
import './AddTodo.css'; // Import the CSS file

const AddTodo: React.FC =() => {
    const [input, setInput] = useState('');
    const[message, setmessage]= useState('');
    const [messageColor, setMessageColor] = useState('');
  const [shakeEffect, setShakeEffect] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

   
    const dispatch = useDispatch();

    const addTodoHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== '') {
            dispatch(addTodo(input));
            setInput('');
            setmessage('Todo added to list');
            setMessageColor('message-success');
            setShowMessage(true);


            setTimeout(() => {
              setmessage('');
            }, 2000); // Clear message after 2 seconds

        }else{
            setmessage('Enter some activity');
            setMessageColor('message-error');
            setShakeEffect(true);

            setTimeout(() => {
                setShakeEffect(false);
            }, 1000); // Reset shake effect after 500ms
      return;
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
                onChange={(e) => {
                    setInput(e.target.value);
                    setmessage('');
                
                }}
            />
            <button
                type="submit"
                className='submit-button'>
                Add Todo
            </button>
                
            </div>
            
           
            
        </form>
        <p className={`message ${messageColor} ${shakeEffect ? 'shake-animation' : ''} ${showMessage ? 'message-appear' : ''}`}>{message}</p>

         {/* <div>{message && <p className="message">{message}</p>}</div> */}
    </>
  );
}

export default AddTodo;