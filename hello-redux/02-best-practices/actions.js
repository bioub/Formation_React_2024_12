// Action Creators (functions that return actions)

import { DEPOSIT, FILTER_CHANGE, WITHDRAW } from "./constants.js";

export function deposit(amount) {
  return {
    type: DEPOSIT,
    payload: amount
  };
}

export function withdraw(amount) {
  return {
    type: WITHDRAW,
    payload: amount
  };
}

export function filterChange(filter) {
  return {
    type: FILTER_CHANGE,
    payload: filter
  };
}
