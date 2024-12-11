import { DEPOSIT, FILTER_CHANGE, WITHDRAW } from "./constants.js";

const initialState = {
  balance: 0,
  filter: "All", // All, Savings, Checking
};

// Flux Standard Action (FSA)
// Doc : https://github.com/redux-utilities/flux-standard-action
// {
//  type: "DEPOSIT",
//  payload: 10
// }


// Reducer function pure function
// 1. Always return the same output for the same input
// 2. No side effects (no API calls, no database calls, no async calls...)
// 3. No mutation of the input
export function reducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

// Test the reducer
// expect(reducer({ balance: 10, filter: 'All' }, { type: "deposit", amount: 10 })).toEqual({
//   balance: 20,
//   filter: 'All'
// });
