import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onClick: () => void }> = (props) => {
  
  
  return <li className={styles.item} onClick={props.onClick}>{props.text}</li>;
};

export default TodoItem;
