import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props)=> {

  const [expenseTitle, setExpenseTitle] = useState(props.title);
  let title = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
