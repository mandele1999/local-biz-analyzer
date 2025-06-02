// src/pages/Dashboard.tsx
import { metrics } from "../data/dashboardMockData";

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <p>This is your business overview with key metrics.</p>

    <div className="row mt-4">
      {metrics.map((item, idx) => (
        <div key={idx} className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">{item.label}</div>
            <div className="card-body">
              <h5 className="card-title">{item.value}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;