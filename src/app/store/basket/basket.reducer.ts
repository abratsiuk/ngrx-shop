import {IBasketItem} from '../../../interfaces/IBasketItem';
import {Action, createReducer, on} from '@ngrx/store';

import {
  addToBasketAction,
  clearBasketAction,
  deleteFromBasketAction,
  IAddToBasketAction,
  IDeleteFromBasketAction,
  IUpdateInBasketAction,
  updateInBasketAction
} from './basket.actions';

export interface IBasketState {
  items: IBasketItem[];
}

const initialState: IBasketState = {
  items: [],
};

const basketReducer = createReducer(initialState,
  on(addToBasketAction, (state, action: IAddToBasketAction): IBasketState => {
    if (state.items.some((item) => item.id === action.payload.id)) {
      return {
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? {...item, qty: item.qty + 1}
            : item;
        }),
      };
    } else {
      return {
        items: [...state.items, {...action.payload, qty: 1}],
      };
    }
  }),
  on(updateInBasketAction, (state, action: IUpdateInBasketAction): IBasketState => {
    return {
      items: state.items.map((item) => {
        return item.id === action.payload.id
          ? {...item, qty: action.payload.qty}
          : item;
      }),
    };
  }),
  on(deleteFromBasketAction, (state, action: IDeleteFromBasketAction): IBasketState => {
    return {
      items: state.items.filter((item) => item.id !== action.payload),
    };
  }),
  on(clearBasketAction, (state): IBasketState => {
    return {
      items: [],
    };
  }),
);

export function basketReducerFunction(state: IBasketState, action: Action) {
  return basketReducer(state, action);
}
