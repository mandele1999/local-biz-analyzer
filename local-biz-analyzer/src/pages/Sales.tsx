// src/pages/Sales.tsx

import { salesData } from "../data/salesMockData";

const Sales = () => {
  return (
    <div>
      <h2>Sales</h2>
      <p>Recent sales transactions overview.</p>

      <table className="table table-striped mt-4">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.date}</td>
              <td>{record.item}</td>
              <td>{record.quantity}</td>
              <td>{record.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
