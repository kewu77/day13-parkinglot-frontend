import React, {useContext, useEffect, useState} from 'react';
import ParkingLot from './ParkingLot';
import {getAllData} from "../axios/api";
import {ParkingLotContext} from "../ParkingLotContext";

const ParkingLotGroup = () => {
    const { state, dispatch } = useContext(ParkingLotContext);

    useEffect(() => {
        getAllData().then((response) => {
            dispatch({ type: 'SET_PARKING_LOTS', payload: response.data });
        });
    }, [dispatch]);

    return (
        <div style={{display:"flex",flexDirection:"row",gap:20}}>
            {state.parkingLots.map((lot) => (
                <ParkingLot key={lot.name} lot={lot} />
            ))}
        </div>
    );
};

export default ParkingLotGroup;
