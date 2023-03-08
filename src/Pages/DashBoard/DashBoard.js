import React from 'react'
import Card from './Card'
import {Doughnut,Line} from "react-chartjs-2";
  /* react-chartjs-2package install*/
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
function Dashboard() {

  
  return (
    <>
    
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" 
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
           </a>
        </div>
        <div className="row">
         <Card  title="Total Students" value="4000" color="primary"/> 
         <Card  title="Total Teachers" value="80" color="info"/> 
         <Card  title="Total Office Staff" value="50" color="warning"/> 
         <Card  title="Total Cleaners" value="40" color="success"/> 
        </div>
        <div className="row">
            <div className="col-lg-4">
                <Doughnut data={{
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 80],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                }}/>
            </div>
            <div className="col-lg-8">
                <Line 
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                position: 'top',
                                },
                                title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                                },
                            },
                            }} 
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [{
                                label: 'Student Percentage for Mark',
                                data: [80, 90, 80, 81, 96, 78, 81],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },],
                        }}
                    />
            </div>
        </div>
    </>
  );
}

export default Dashboard