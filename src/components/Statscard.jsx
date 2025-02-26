import React from 'react';

const StatsCard = ({ label, value, icon: Icon, image, theme }) => (
    <div
        className={`rounded-lg shadow-lg p-4 flex flex-col items-center space-y-3 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
        <div className="w-full flex justify-center">
            <img src={image} alt={label} className="h-12 w-12 object-contain" />
        </div>
        <h3 className="text-xl font-semibold">{label}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full">
            <Icon size={24} />
        </div>
    </div>
);

export default StatsCard;
