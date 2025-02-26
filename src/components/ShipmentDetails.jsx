import React from 'react';

const ShipmentDetails = ({ shipments, theme }) => (
    <div className={`rounded-lg shadow-lg p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Shipment Details</h3>
        <div className="space-y-4">
            {shipments.map(shipment => (
                <div key={shipment.id} className={`border-b ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} pb-4`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{shipment.id}</h4>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                Current Location: {shipment.currentLocation}
                            </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-sm ${shipment.priority === 'High'
                            ? `${theme === 'dark' ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-400'}`
                            : `${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-300 text-gray-800'}`
                            }`}>
                            {shipment.priority}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ShipmentDetails;
