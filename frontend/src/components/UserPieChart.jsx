import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function UserPieChart({ users }) {

  const ageGroups = {
    "18-30": users.filter(user => user.age >= 18 && user.age <= 30).length,
    "31-45": users.filter(user => user.age >= 31 && user.age <= 45).length,
    "46-60": users.filter(user => user.age >= 46 && user.age <= 60).length,
    "60+": users.filter(user => user.age > 60).length,
  };

  const data = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: "Users",
        data: Object.values(ageGroups),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card p-3 mt-4">
      <h4 className="text-center">User Age Distribution</h4>

      <div style={{ width: "350px", margin: "auto" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default UserPieChart;