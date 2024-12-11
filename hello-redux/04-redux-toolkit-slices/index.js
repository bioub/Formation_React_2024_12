import { configureStore } from "@reduxjs/toolkit";

import { balanceSelector } from "./selectors.js";
import { deposit, filterChange, reducer, withdraw } from "./slices.js";

const store = configureStore({
  reducer: reducer,
});

// element.addEventListener()
store.subscribe(() => {
  console.log("balance", balanceSelector(store.getState()));
});

// element.dispatchEvent()
store.dispatch(deposit(10));
store.dispatch(deposit(20));
store.dispatch(withdraw(5));
store.dispatch(filterChange("Savings"));
