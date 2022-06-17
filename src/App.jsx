import GlobalStyle from './styles/Global'
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'
import { useEffect, useState } from 'react'


function App() {


 const data = localStorage.getItem("transactions")

  const [transactionslist, setTrasactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {

    const amoutExpense = transactionslist
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amout))

    const amoutIncome = transactionslist
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amout))

    const expense = amoutExpense.reduce((acc, cur) => acc + cur, 0 ).toFixed(2)
    const income = amoutIncome.reduce((acc, cur) => acc + cur, 0 ).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${ Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionslist])

  const handleAdd = (transaction) =>{
    const newArrayTransactions = [...transactionslist, transaction]
    setTrasactionsList(newArrayTransactions)
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }


  return (
    <>
      <Header/>
      <Resume income={income} expense={expense} total={total}/>
      <Form/>
      <GlobalStyle />
    </>
  );
}

export default App;
