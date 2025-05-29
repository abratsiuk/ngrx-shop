import {createAction, props} from '@ngrx/store';


export enum FundsActionEnum {
  CLEAR_FUNDS = '@@funds/CLEAR_FUNDS',
  DECREASE_FUNDS = '@@funds/DECREASE_FUNDS',
  INCREASE_FUNDS = '@@funds/INCREASE_FUNDS',
}

export interface IDecreaseFundsAction {
  payload: number;
}

export interface IIncreaseFundsAction {
  payload: number;
}

export const clearFundsAction = createAction(FundsActionEnum.CLEAR_FUNDS);

export const decreaseFundsAction = createAction(FundsActionEnum.DECREASE_FUNDS,
  props<IDecreaseFundsAction>());

export const increaseFundsAction = createAction(FundsActionEnum.INCREASE_FUNDS,
  props<IIncreaseFundsAction>());
