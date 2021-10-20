import ExpenseItem from "./ExpenseItem";

function AllExpenses(props) {
    return (
        <div>
            <h2>Here is a list of your expenses</h2>
            <ExpenseItem title={props.allexpenses[0].title} amount={props.allexpenses[0].amount} date={props.allexpenses[0].date}/>
            <ExpenseItem title={props.allexpenses[1].title} amount={props.allexpenses[1].amount} date={props.allexpenses[1].date}/>
            <ExpenseItem title={props.allexpenses[2].title} amount={props.allexpenses[2].amount} date={props.allexpenses[2].date}/>
            <ExpenseItem title={props.allexpenses[3].title} amount={props.allexpenses[3].amount} date={props.allexpenses[3].date}/>
        </div>

)

}

export default AllExpenses;
