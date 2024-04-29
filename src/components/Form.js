import React, { useState } from 'react'
import "./Form.css"

function Form() {

  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""

  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(transaction)
  }

  function handleInput(e) {
    const key = e.target.id
    const value = e.target.value

    setTransaction({
      ...transaction,
      [key]: value
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="form">

          <label>Date:</label>
          <input
            type="date"
            id="date"
            value={transaction.date}
            onChange={handleInput}
          />

          <input
            type="text"
            id="description"
            placeholder="Description"
            value={transaction.description}
            onChange={handleInput}
          />

          <input
            type="text"
            id="category"
            placeholder="Category"
            value={transaction.category}
            onChange={handleInput}
          />

          <input
            type="text"
            id="amount"
            placeholder='Amount'
            value={transaction.amount}
            onChange={handleInput}
          />

        </div>
        <input type="submit" value="Add Transactions"></input>

      </form>
    </div>
  )
}

export default Form