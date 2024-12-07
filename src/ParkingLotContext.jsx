import React, { createContext, useReducer } from 'react';

const ParkingLotContext = createContext();

const parkingLotReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PARKING_LOTS':
            return { ...state, parkingLots: action.payload };
        default:
            return state;
    }
};

const ParkingLotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(parkingLotReducer, { parkingLots: [] });

    return (
        <ParkingLotContext.Provider value={{ state, dispatch }}>
            {children}
        </ParkingLotContext.Provider>
    );
};

export { ParkingLotContext, ParkingLotProvider, parkingLotReducer };
