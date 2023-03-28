import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};


export function StackedChart({ labels }) {
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: [50, 170, 50, 180, 10, 180, 20],
                borderColor: 'rgb(135, 96, 251)',
                backgroundColor: 'rgb(135, 96, 251, 0.5)',
                lineTension: 0.2,
            },
            {
                fill: true,
                label: 'Dataset 2',
                data: [100, 50, 195, 70, 170, 50, 140],
                borderColor: "hsl(197, 100%, 50%)",
                backgroundColor: "hsl(197 100% 50% / 50%)",
                lineTension: 0.2,
            },
        ],
    };
    return <Line options={options} data={data} />;
}
