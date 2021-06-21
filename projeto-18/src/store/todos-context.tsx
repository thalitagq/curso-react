import React, { createContext, useState } from "react";
import Todo from "../modules/todo";

type TodosContexObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContexObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewItem = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((previousState) => {
      return [...previousState, newTodo];
    });
  };

  const removeItem = (id: string) => {
    setTodos((previousState) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContexObj = {
    items: todos,
    addTodo: addNewItem,
    removeTodo: removeItem,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;