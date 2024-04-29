import React from 'react'
import "./Table.css"
import Form from './Form'

function Table() {
    return (
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
                {Form.map(({date, description, category, amount}) => (
                    <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{amount}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )
}

export default Table