import ExpenseForm from "./ExpneseForm";
import "./NewExpense.css"
const NewExpense = (props)=>{
    const saveDataExpenseHandler = (expenseData) => {
        const newExpenseObj = {
            ...expenseData,
            id : Math.random().toString(),
        }
        props.addExpenseData(newExpenseObj);
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveDataExpense = {saveDataExpenseHandler}></ExpenseForm>
    </div>)
}

export default NewExpense;