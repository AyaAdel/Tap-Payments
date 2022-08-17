import { createSlice } from '@reduxjs/toolkit';
import { Balance } from 'types/products';

const initialState: Balance = { amount: 0 };

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    initBalance: (state, action) => {
      state.amount = action.payload;
    },
    rechargeBalance: (state) => {
      state.amount += 10;
    },
  },
});

export const { initBalance, rechargeBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
