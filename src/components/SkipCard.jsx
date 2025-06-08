import React from 'react';

const imageMap = {
  4: '/images/4-yarder-skip.jpg',
  6: '/images/5-yarder-skip.jpg',
  8: '/images/6-yarder-skip.jpg',
  10: '/images/8-yarder-skip.jpg',
  12: '/images/10-yarder-skip.jpg',
  14: '/images/12-yarder-skip.jpg',
  16: '/images/14-yarder-skip.jpg',
  20: '/images/16-yarder-skip.jpg',
  40: '/images/20-yarder-skip.jpg',
};

export default function SkipCard({ skip, isSelected, onSelect }) {
  if (!skip) return null;
  const imageSrc = imageMap[skip.size] || '/images/10-yarder-skip.jpg';

  return (
    <div
      onClick={onSelect}
      className={`bg-[#13161F] rounded-2xl overflow-hidden shadow-lg transition hover:shadow-xl cursor-pointer ${
        isSelected ? 'border-2 border-blue-500' : 'border border-[#2B2E3C]'
      }`}
    >
      {/* Image + Badge */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-44 object-cover rounded-none"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {skip.size} Yards
        </span>
      </div>

      {/* Text & Price */}
      <div className="p-4 text-white">
        <div className="text-lg font-semibold">{skip.size} Yard Skip</div>
        <div className="text-sm text-gray-400">{skip.hire_period_days} day hire period</div>
        <div className="text-xl font-bold text-blue-400 mt-2">£{skip.price_before_vat}</div>

        <button
          className={`mt-4 w-full py-2 rounded-md font-medium transition flex items-center justify-center gap-2 ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-[#1F2230] text-white hover:bg-blue-600'
          }`}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
          <span className="text-sm">→</span>
        </button>
      </div>
    </div>
  );
}
