import { legacy_createStore } from "redux";

import { deposit, filterChange, withdraw } from "./actions.js";
import { reducer } from "./reducers.js";
import { balanceSelector } from "./selectors.js";

const store = legacy_createStore(reducer);

// element.addEventListener()
store.subscribe(() => {
  console.log("balance", balanceSelector(store.getState()));
});

// element.dispatchEvent()
store.dispatch(deposit(10));
store.dispatch(deposit(20));
store.dispatch(withdraw(5));
store.dispatch(filterChange("Savings"));
