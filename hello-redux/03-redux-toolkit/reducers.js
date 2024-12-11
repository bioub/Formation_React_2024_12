import { createReducer } from "@reduxjs/toolkit";

import { deposit, filterChange, withdraw } from "./actions.js";

const initialState = {
  balance: 0,
  filter: "All", // All, Savings, Checking
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deposit, (state, action) => {
      state.balance += action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.balance -= action.payload;
    })
    .addCase(filterChange, (state, action) => {
      state.filter = action.payload;
    });
});

