import React, {useContext, useState} from 'react';
import {park, fetch, getAllData} from '../axios/api';
import {ParkingLotContext} from "../ParkingLotContext";

const ParkingLotOperate = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('Standard');
    const { dispatch } = useContext(ParkingLotContext);

    const handlePark = async () => {
        await park(strategy, plateNumber);
        getAllData().then((response) => {
            dispatch({ type: 'SET_PARKING_LOTS', payload: response.data });
        });
    };

    const handleFetch = async () => {
        await fetch(plateNumber);
        getAllData().then((response) => {
            dispatch({ type: 'SET_PARKING_LOTS', payload: response.data });
        });
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <label>Plate Number</label>
            <input value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
            <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
                <option value="Standard">Standard</option>
                <option value="Smart">Smart</option>
                <option value="SuperSmart">SuperSmart</option>
            </select>
            <button onClick={handlePark}>Park</button>
            <button onClick={handleFetch}>Fetch</button>
        </div>
    );
};

export default ParkingLotOperate;
