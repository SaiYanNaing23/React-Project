import Card from "./Card"
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import "./ExpenseItem.css"

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div>
            <ExpenseTitle title = {props.title}></ExpenseTitle>
            <ExpenseAmount amount = {props.amount}></ExpenseAmount>
            </div>
        </Card>
    )
}

export default ExpenseItem;