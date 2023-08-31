import { Bar } from 'react-chartjs-2';
import Chart from 'react-apexcharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);


const SellerWeeklyChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thr','Fri'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3,30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the labels
      },
    }
  };

  const testOpt = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };
// };

  // return (
  //   <div style={{height:'200px',marginBottom:'16px'}}>
  //     <h3>Sales Data</h3>
  //     <Chart options={testOpt} type='bar' />
  //   </div>
  // );
  return (
    <div >
      <h3>Sales Data</h3>
      <Bar  style={{ minHeight : "150px",maxHeight:'200px', width:"auto",backgroundColor:'aliceblue'}} data={data} options={options} />
    </div>
  );
};


export default SellerWeeklyChart;


