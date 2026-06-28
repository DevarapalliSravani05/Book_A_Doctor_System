import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function AppointmentPieChart({ stats }) {
  const data = {
    labels: [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ],

    datasets: [
      {
        data: [
          stats.pending,
          stats.confirmed,
          stats.completed,
          stats.cancelled,
        ],

        backgroundColor: [
          "#ffc107",
          "#0d6efd",
          "#198754",
          "#dc3545",
        ],

        borderWidth: 2,
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
}

export default AppointmentPieChart;