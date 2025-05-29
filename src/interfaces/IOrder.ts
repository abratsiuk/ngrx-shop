import {IBasketItem} from './IBasketItem';
import {OrderStateEnum} from './OrderStateEnum';


export interface IOrder {
  id: number;
  items: IBasketItem[];
  totalQty: number;
  totalAmount: number;
  state: OrderStateEnum;
  dateCreate: number;
  dateReceive: number | null;
  dateCancel: number | null;
}
