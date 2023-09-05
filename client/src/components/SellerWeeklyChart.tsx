import { Bar } from 'react-chartjs-2';
import Chart from 'react-apexcharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import CustomInstance from '../lib/axios';
import { Switch } from 'antd';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);


const SellerWeeklyChart = () => {

  const [labels,setLabels] = useState([]);
  const [labelText,setLabelText]  = useState('sales');
  const [orderData,setOrderData] = useState([]);
  const [salesData,setSalesData] = useState([]);
  const [dataset,SetData] = useState([]);
  const {store_id} = JSON.parse(localStorage.getItem('raw_user')!);

  useEffect(()=>{

    const getWeeklyStats = async ()=>{
        const {data : stats} = await CustomInstance.get(`/order/stats/${store_id}`);
        
        const lab  = stats.map( v => v.weekday);
        setLabels(lab);
        const ds = stats.map( v => v.price);
        setSalesData(ds);
        SetData(ds);
        const ord = stats.map(v => v.order);
        setOrderData(ord);

        console.log('💥💥💥💥',stats);
    }
    console.log(store_id);
    getWeeklyStats();

  },[])


  const data = {
    // labels: ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thr','Fri'],
    labels:labels,
    datasets: [
      {
        label: labelText,
        data: dataset,
        // data: [12, 19, 3, 5, 2, 3,30],
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

  const handleSwitch = (chcked : boolean) : void =>{

    //false = sales
    //true = orders
    if(chcked){
      SetData(orderData);
    }else{
      SetData(salesData);
    }
    // console.log(`🥇🥋🥇`,chcked);
  }

  // return (
  //   <div style={{height:'200px',marginBottom:'16px'}}>
  //     <h3>Sales Data</h3>
  //     <Chart options={testOpt} type='bar' />
  //   </div>
  // );
  return (
    <div >
     <div style={{display:'flex',height:'27px',alignItems:'center'}}>
     <h3 style={{marginRight:'4px'}}>Weekly Data by :</h3>
      <Switch checkedChildren="orders" onChange={(chk,ev)=> handleSwitch(chk)} unCheckedChildren="sales"  size='small'/>
     </div>
      <Bar  style={{ minHeight : "150px",maxHeight:'200px', width:"auto",backgroundColor:'aliceblue'}} data={data} options={options} />
    </div>
  );
};


export default SellerWeeklyChart;


