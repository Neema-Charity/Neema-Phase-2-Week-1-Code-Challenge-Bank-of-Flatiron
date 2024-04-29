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

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTransactions = searchTerm
  ? transaction.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    
  : transaction;

  return (
    <div>
      <div className="search-container">
        <form className="search-box">
          <div className="search-input-box">
            <input
              type="text"
              placeholder="Search your Recent Transactions"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        </form>
      </div>
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
        <input type="submit" value="Add Transaction" id="submit" />
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
            {filteredTransactions.map(({ date, description, category, amount }, index) => (
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

