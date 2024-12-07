import React from 'react';
import ParkingCar from './ParkingCar';

const ParkingLot = ({ lot }) => {
    const { capacity,tickets } = lot;
    const grid = Array.from({ length: parseInt(capacity) }, (_, index) => index + 1);


    return (
        <div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                {grid.map((position) => {
                    const spot = tickets.find((spot) => spot.position === position);
                    return (
                        <div key={position + Math.random()} style={{border: '1px solid black', padding: '10px'}}>
                            {spot ? <ParkingCar plateNumber={spot.plateNumber}/> : 'Empty'}
                        </div>
                    );
                })}
            </div>
            <h3>{lot.name}</h3>
        </div>
    );
};

export default ParkingLot;
