import React, { useState, useEffect } from 'react';
import "./Form.css";

function Form() {
  const storedTransactions = localStorage.getItem("transactions");
  const initialTransactions = storedTransactions ? JSON.parse(storedTransactions) : [];
  
  const [transaction, setTransaction] = useState(initialTransactions);

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

  const filteredTransactions = transaction.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transaction));
  }, [transaction]);

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
      <form onSubmit={handleSubmit} id="form">
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



