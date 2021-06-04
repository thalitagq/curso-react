import Card from "../UI/Card";
import ExpenseFilter from "../UI/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filter, setFilter] = useState("2021");
  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filter);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filter} onFilterChange={changeFilter} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
export default Expenses;
