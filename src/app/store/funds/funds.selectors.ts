import {IRootState} from '../IRootState';

export const selectFunds = (state: IRootState): number => state.funds.amount;

