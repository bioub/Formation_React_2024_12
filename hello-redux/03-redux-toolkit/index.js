import { configureStore } from "@reduxjs/toolkit";

import { deposit, filterChange, withdraw } from "./actions.js";
import { reducer } from "./reducers.js";
import { balanceSelector } from "./selectors.js";

const store = configureStore({
  reducer,
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
