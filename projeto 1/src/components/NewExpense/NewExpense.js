import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  const toogleFormHandler = () => {
    setShowForm(previousState => !previousState)
  }
  
  return(
    <div className='new-expense'>
      {showForm 
        ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToogleForm={toogleFormHandler}/>
        : <button type='button' onClick={toogleFormHandler}>Add New Expense</button>
      }
    </div>
  );
}

export default NewExpense;