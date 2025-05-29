import {clearFundsAction, decreaseFundsAction, IDecreaseFundsAction, IIncreaseFundsAction, increaseFundsAction} from './funds.actions';
import {Action, createReducer, on} from '@ngrx/store';

interface IFundsState {
  amount: number;
}

const initialState: IFundsState = {
  amount: 10000,
};

const fundsReducer = createReducer(initialState,
  on(clearFundsAction, (state): IFundsState => initialState),
  on(decreaseFundsAction, (state, action: IDecreaseFundsAction): IFundsState => ({
    ...state,
    amount:
      state.amount > action.payload
        ? state.amount - action.payload
        : 0,
  })),
  on(increaseFundsAction, (state, action: IIncreaseFundsAction): IFundsState => ({
    ...state,
    amount: state.amount + action.payload
  })));

export function fundsReducerFunction(state: IFundsState, action: Action) {
  return fundsReducer(state, action);
}
