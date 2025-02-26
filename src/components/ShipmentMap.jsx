import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet styles

const ShipmentMap = ({theme}) => {
    return (
        <div className={`rounded-lg shadow-lg p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Shipment Map</h3>

            <div className={`h-64 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex flex-col items-center justify-center`}>
                <MapContainer
                    center={[51.505, -0.09]} // Default map center
                    zoom={13}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
};

export default ShipmentMap;
