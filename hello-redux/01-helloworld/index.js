import { legacy_createStore } from "redux";

const initialState = {
  balance: 0,
  filter: "All", // All, Savings, Checking
};

// Reducer function pure function
// 1. Always return the same output for the same input
// 2. No side effects (no API calls, no database calls, no async calls...)
// 3. No mutation of the input
function reducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.amount,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.amount,
      };
    case "filterChange":
      return {
        ...state,
        filter: action.value,
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

// element.addEventListener()
store.subscribe(() => {
  console.log("subscribe state", store.getState());
});

// element.dispatchEvent()
store.dispatch({ type: "deposit", amount: 10 });
store.dispatch({ type: "deposit", amount: 20 });
store.dispatch({ type: "withdraw", amount: 5 });
store.dispatch({ type: "filterChange", value: "Savings" });
