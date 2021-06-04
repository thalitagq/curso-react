import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [useInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: useInput.enteredTitle,
      amount: Number(useInput.enteredAmount),
      date: new Date(useInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onToogleForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={useInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={useInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={useInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onToogleForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
