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

function MonthlyAppointmentsChart({ monthlyStats }) {
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: monthlyStats.map((item) => months[item._id]),
    datasets: [
      {
        label: "Appointments",
        data: monthlyStats.map((item) => item.total),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
}

export default MonthlyAppointmentsChart;