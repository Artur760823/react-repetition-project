import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props){

  return(
    <Card className='expenses'>
      {props.expenses.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          date={expense.date} 
          amount={expense.amount}
        />
      ))}
    </Card>

  )

}

export default Expenses;