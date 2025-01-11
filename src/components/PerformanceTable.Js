import React from 'react';
import './PerformanceTable.css';

function PerformanceTable() {
  return (
    <div className="performance-table">
      <h3>Performance</h3>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1D</td>
            <td>+2.5%</td>
          </tr>
          <tr>
            <td>1W</td>
            <td>+5.1%</td>
          </tr>
          <tr>
            <td>1M</td>
            <td>+12.3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PerformanceTable;