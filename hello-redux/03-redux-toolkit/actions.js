// Action Creators (functions that return actions)

import { createAction } from "@reduxjs/toolkit";

export const deposit = createAction('DEPOSIT');
export const withdraw = createAction('WITHDRAW');
export const filterChange = createAction('FILTER_CHANGE');
