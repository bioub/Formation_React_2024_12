import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  filter: "All", // All, Savings, Checking
};

const balanceSlice = createSlice({
  initialState: initialState.balance,
  name: "balance",
  reducers: {
    deposit: (state, action) => {
      // avec return on indique ne pas utiliser immer (immer n'ayant de sens que si state est un objet)
      return state + action.payload;
    },
    withdraw: (state, action) => {
      return state - action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const filterSlice = createSlice({
  initialState: initialState.filter,
  name: 'filter',
  reducers: {
    filterChange: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const reducer = combineReducers({
  balance: balanceSlice.reducer,
  filter: filterSlice.reducer,
});

