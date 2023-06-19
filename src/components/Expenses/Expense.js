import ExpenseItem from "./ExpenceItem"
import ExpenseFilter from "./ExpenseFilter"
import "./Expense.css"
import { useState } from "react"
const Expenses = (props) =>{
  const [filterYear,setFilterYear] = useState("")
  const optionValHandler = (optiondata)=>{
    setFilterYear(optiondata);
  }
    return <div>
      <ExpenseFilter select = {filterYear} addOptionVal = {optionValHandler}></ExpenseFilter>
      {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        {/* <ExpenseItem 
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}
      ></ExpenseItem>  
      <ExpenseItem 
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}
      ></ExpenseItem>  
      <ExpenseItem 
      title = {expenses[3].title}
      amount = {expenses[3].amount}
      date = {expenses[3].date}
      ></ExpenseItem>  */}
    </div>
}
export default Expenses;