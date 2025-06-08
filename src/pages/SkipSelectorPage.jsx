import React, { useEffect, useState } from 'react';
import SkipCard from '../components/SkipCard';

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export default function SkipSelectorPage() {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
           setSkips(data);
        } else {
          console.error("Unexpected API structure:", data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch skips:", err);
      });
  }, []);

  return (
    <div className="p-4 bg-[#0D0D0D] min-h-screen text-white">
      
      {/* Étapes de navigation */}
<div className="flex items-center justify-center space-x-6 mb-10 w-full">
        <div className="flex items-center space-x-2 text-blue-400">
          <span>📍</span>
          <span className="font-semibold">Postcode</span>
        </div>
        <div className="w-10 border-t border-blue-500" />
        <div className="flex items-center space-x-2 text-blue-400">
          <span>🗑️</span>
          <span className="font-semibold">Waste Type</span>
        </div>
        <div className="w-10 border-t border-blue-500" />
        <div className="flex items-center space-x-2 text-blue-500">
          <span>🚛</span>
          <span className="font-semibold">Select Skip</span>
        </div>
        <div className="w-10 border-t border-gray-500" />
        <div className="flex items-center space-x-2 text-gray-400">
          <span>📋</span>
          <span>Permit Check</span>
        </div>
        <div className="w-10 border-t border-gray-500" />
        <div className="flex items-center space-x-2 text-gray-400">
          <span>📅</span>
          <span>Choose Date</span>
        </div>
        <div className="w-10 border-t border-gray-500" />
        <div className="flex items-center space-x-2 text-gray-400">
          <span>💳</span>
          <span>Payment</span>
        </div>
      </div>

      {/* Titre */}
      <h1 className="text-2xl font-bold mb-2 text-center">Choose Your Skip Size</h1>
      <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>

      {/* Grille des skips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {skips.map((skip, index) => (
          <SkipCard
            key={skip.id || index}
            skip={skip}
            isSelected={skip.id === selectedId}
            onSelect={() => setSelectedId(skip.id)}
          />
        ))}
      </div>
    </div>
  );
}
