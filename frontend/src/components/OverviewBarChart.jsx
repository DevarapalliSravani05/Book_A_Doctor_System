import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function OverviewBarChart({ stats }) {
  const data = {
    labels: ["Users", "Doctors", "Appointments"],

    datasets: [
      {
        label: "Hospital Overview",
        data: [
          stats.users,
          stats.doctors,
          stats.appointments,
        ],

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
        ],
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

export default OverviewBarChart;