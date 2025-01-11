import React from 'react';
import Header from './components/Header';
import ChartSection from './components/ChartSection';
import PerformanceTable from './components/PerformanceTable';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="left-panel">
          <ChartSection />
          <PerformanceTable />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
