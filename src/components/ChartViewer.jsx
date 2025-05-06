// src/components/ChartViewer.jsx
import React from 'react';

export default function ChartViewer({ file, title }) {
  const src = `/charts/${file}`;

  return (
    <div className="p-4 bg-white rounded-3xl shadow-lg mb-6 w-full min-h-[800px]">
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <div className="flex-1 relative">
          <iframe
            src={src}
            title={title}
            className="w-full h-full absolute inset-0 border-0 rounded-lg"
            style={{ minHeight: '1200px', minWidth:'1500px' }}
          />
        </div>
      </div>
    </div>
  );
}