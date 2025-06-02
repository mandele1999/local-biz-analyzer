// src/pages/Inventory.tsx

import { inventoryData } from "../data/inventoryMockData";

const Inventory = () => {
  return (
    <div>
      <h2>Inventory</h2>
      <p>Track available stock levels.</p>

      <table className="table table-bordered mt-4">
        <thead className="table-light">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <span
                  className={`badge ${
                    item.status === "Low" ? "bg-danger" : "bg-success"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;