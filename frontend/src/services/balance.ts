import { http } from 'utils/http';

export const getCurrentBalance = () =>
  http('http://localhost:8000/api/balance', 'GET');

export const rechangeBalanceAmount = () =>
  http('http://localhost:8000/api/balance', 'POST', {
    amount: 10,
  });
