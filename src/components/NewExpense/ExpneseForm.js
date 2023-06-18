import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [dateVal,setDateVal]=useState("");
    // const [inputVal,setInputval] = useState({
    //     title : "",
    //     amount : "",
    //     dateVal : "",
    // })
// t,    console.log(title,amoundateVal);

    const titleHandler = (e)=>{
        setTitle(e.target.value);
        // setInputval((prev)=>{
        //     return {...prev,title : e.target.value}
        // });
    };
    const amountHandler = (e)=>{
        setAmount(e.target.value);
        // setInputval({
        //     ...inputVal,
        //     amount : e.target.value,
        // });
    };
    const dateHandler = (e)=>{
        setDateVal(e.target.value);
        // setInputval({
        //     ...inputVal,
        //     dateVal : e.target.value,
        // });
    };
    const submitHandler = (e)=>{
        e.preventDefault();
        const expense ={
              title : title,
              amount : amount,
              date: new Date(dateVal),
            }
        // console.log(expense);
        props.onSaveDataExpense(expense)
        setTitle("");
        setAmount("");
        setDateVal("");
    }
    return (
        <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min={0.01} value={amount} step={0.01} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min={2019-1-1} value={dateVal} step={2023-12-31} onChange={dateHandler}></input>
        </div>
    </div>
    <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}
// document.getElementsByTagName("input").addEventListener('change',function(){console.log("this is title");});
export default ExpenseForm;