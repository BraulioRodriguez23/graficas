// src/App.jsx
import React from 'react';
import ChartViewer from './components/ChartViewer';

const charts = [
  { file: 'polar_bar_plot.html', title: 'Polar Bar Plot' },
  { file: 'polar_line_plot.html', title: 'Polar Line Plot' },
  { file: 'polar_scatter_plot.html', title: 'Polar Scatter Plot' },
];

export default function App() {
  return (
    <div className="min-h-96 bg-gray-500 p-20">
      <h1 className="text-2xl font-bold mb-8">My Scraping Charts</h1>
      <div className="space-y-8">
        {charts.map(({ file, title }) => (
          <ChartViewer key={file} file={file} title={title} />
        ))}
      </div>
    </div>
  );
}
