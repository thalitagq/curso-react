import { useContext, useRef } from "react";
import {TodosContext} from '../store/todos-context'
import styles from './NewTodo.module.css'

const NewTodo = () => {
  const todosCtx = useContext(TodosContext)
  const todoRefInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoRefInput.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoRefInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
