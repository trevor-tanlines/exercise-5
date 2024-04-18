import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rbga(53, 162, 235, 0.4)',
                },
                {
                    label: 'Data 2',
                    data: [7, 78, 35, 3, 31, 90, 5],
                    borderColor: 'rgb(53,222,135)',
                    backgroundColor: 'rbga(53, 162, 235, 0.4)',
                },
                {
                    label: 'Data 3',
                    data: [77, 37, 98, 12, 18, 54, 25],
                    borderColor: 'rgb(74,122,205)',
                    backgroundColor: 'rbga(53, 162, 235, 0.4)',
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Swag Achieved By ME'
                },
                maintainAspectRatio: false,
                responsive: true
                }
            })
        })

        return(
            <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "500px"}}/>
                </div>
                </>
        
    )
}