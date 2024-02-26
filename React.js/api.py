import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
    user: null,
    caregivers: [],
    bookings: [],
    // Add more state properties as needed
};

// Create context
const AppContext = createContext();

// Define reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_CAREGIVERS':
            return { ...state, caregivers: action.payload };
        case 'ADD_BOOKING':
            return { ...state, bookings: [...state.bookings, action.payload] };
        // Add more cases for other actions
        default:
            return state;
    }
};

// Create AppProvider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to access state and dispatch
export const useAppContext = () => {
    return useContext(AppContext);
};
