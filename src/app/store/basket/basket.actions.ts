import {IBasketItem} from '../../../interfaces/IBasketItem';
import {createAction, props} from '@ngrx/store';

export enum BasketActionTypes {
  ADD_TO_BASKET = '@@basket/ADD_TO_BASKET',
  UPDATE_IN_BASKET = '@@basket/UPDATE_IN_BASKET',
  DELETE_FROM_BASKET = '@@basket/DELETE_FROM_BASKET',
  CLEAR_BASKET = '@@basket/CLEAR_BASKET',
}

export interface IUpdateBasketPayload {
  id: string;
  qty: number;
}

export interface IAddToBasketAction {
  payload: IBasketItem;
}

export interface IUpdateInBasketAction {
  payload: IUpdateBasketPayload;
}

export interface IDeleteFromBasketAction {
  payload: string;
}

export const addToBasketAction = createAction(BasketActionTypes.ADD_TO_BASKET,
  props<IAddToBasketAction>());

export const updateInBasketAction = createAction(BasketActionTypes.UPDATE_IN_BASKET,
  props<IUpdateInBasketAction>());

export const deleteFromBasketAction = createAction(BasketActionTypes.DELETE_FROM_BASKET,
  props<IDeleteFromBasketAction>());

export const clearBasketAction = createAction(BasketActionTypes.CLEAR_BASKET);
