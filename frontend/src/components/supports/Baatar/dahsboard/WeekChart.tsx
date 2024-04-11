import React from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { WidthFull } from '@mui/icons-material';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

export const WeekChart = () => {
    const data = {
        labels: ["Sunday","Monday", "Thuesday", "Wednesday", "Thursday", "Friday","Saturday"],
        datasets: [
          {
            label: "Week",
            backgroundColor: "blue",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: [12, 19, 25, 15, 20,32,56]
          },
          {
            label: "Last Week",
            data: [12, 19, 30, 15, 12,34,54],
            backgroundColor: "aqua"
          }
        ]
      };
    
      const options = {
        plugins: {
          legend: {
            display: true
          }
        },
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 10,
            bottom: 5
          },
          margin: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            border: { dash: [6, 6], display: true },
            grid: {
              display: true // Display grid lines for the y-axis
            },
            ticks: {
              padding: 15
            }
          },
          x: {
            beginAtZero: true,
            border: { display: true },
            grid: {
              display: false // Display grid lines for the y-axis
            },
            ticks: {
              padding: 7
            }
          }
        },
        elements: {
          bar: {
            borderRadius: 5,
            borderWidth: 0.7
          }
        }
      };
    
  return (
    <div className=''>
          <Bar data={data} options={options} />
    </div>
  )
}
