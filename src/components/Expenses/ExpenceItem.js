import { useState } from "react";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title)
    const handlerClick = ()=> {
        setTitle("Hello Sai");
        console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div>
            <ExpenseTitle title = {title}></ExpenseTitle>
            <ExpenseAmount amount = {props.amount}></ExpenseAmount>
            </div>
        </Card>
    )
}

export default ExpenseItem;