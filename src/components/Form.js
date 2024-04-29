import React, { useState } from 'react';
import "./Form.css";

function Form() {
  const [transaction, setTransaction] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTransaction([...transaction, formData]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  function handleInput(e) {
    const key = e.target.id;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="form">
          <label>Date:</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInput}
          />

          <input
            type="text"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInput}
          />

          <input
            type="text"
            id="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInput}
          />

          <input
            type="text"
            id="amount"
            placeholder='Amount'
            value={formData.amount}
            onChange={handleInput}
          />
        </div>
        <input type="submit" value="Add Transaction" id="submit"/>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          <tr key="initial">
                <td>2022-05-16</td>
                <td>Movies</td>
                <td>Entertainment</td>
                <td>25</td>
              </tr>
              <tr key="second">
                <td>2022-05-16</td>
                <td>Movies</td>
                <td>Entertainment</td>
                <td>25</td>
              </tr>
            {transaction.map(({ date, description, category, amount }, index) => (
              <tr key={index}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
