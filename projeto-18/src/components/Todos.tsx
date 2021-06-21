import TodoItem from "../components/TodoItem";
import {TodosContext} from "../store/todos-context"
import styles from "./Todos.module.css";
import { useContext } from "react";

const Todos = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
