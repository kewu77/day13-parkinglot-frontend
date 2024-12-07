import React from 'react';

const ParkingCar = ({ plateNumber }) => {
    return (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
            {plateNumber}
        </div>
    );
};

export default ParkingCar;
