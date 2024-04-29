import React, { useState, useEffect } from 'react';
import "./Form.css";

function Form() {
  // Function to retrieve transactions from localStorage
  const getStoredTransactions = () => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };

  const [transactions, setTransactions] = useState(getStoredTransactions());
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, formData]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  };

  // Function to handle input changes
  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Function to filter transactions based on search term
  const filterTransactions = () => {
    return transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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
            {filterTransactions().map(({ date, description, category, amount }, index) => (
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





