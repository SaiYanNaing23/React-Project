import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = () => {
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [dateVal,setDateVal]=useState("");
    // const [inputVal,setInputval] = useState({
    //     title : "",
    //     amount : "",
    //     dateVal : "",
    // })
    console.log(title,amount,dateVal);

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
              id: "e1",
              title : title,
              amount : amount,
              date: new Date(dateVal),
            }
        console.log(expense);
    }
    return (
        <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min={0.01} step={0.01} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min={2019-1-1} step={2023-12-31} onChange={dateHandler}></input>
        </div>
    </div>
    <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}
// document.getElementsByTagName("input").addEventListener('change',function(){console.log("this is title");});
export default ExpenseForm;