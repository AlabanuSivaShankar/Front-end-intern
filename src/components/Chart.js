import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartSection.css';

function ChartSection() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Price',
        data: [40000, 45000, 42000, 46000, 48000],
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-section">
      <h2>Bitcoin Price Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default ChartSection;
