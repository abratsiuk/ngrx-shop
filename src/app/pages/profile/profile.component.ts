import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {clearFundsAction, decreaseFundsAction, increaseFundsAction} from '../../store/funds/funds.actions';
import {IRootState} from '../../store/IRootState';
import {clearBasketAction} from '../../store/basket/basket.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fundsStep = 1000;

  constructor(private store: Store<IRootState>) {
  }

  ngOnInit(): void {
  }

  handleClearFunds = () => {
    this.store.dispatch(clearFundsAction());
  };

  handleDecreaseFunds = () => {
    this.store.dispatch(decreaseFundsAction(
      {payload: this.fundsStep}));
  };
  handleIncreaseFunds = () => {
    this.store.dispatch(increaseFundsAction({payload: this.fundsStep}));
  };

  handleClearOrders = () => {
    // this.store.dispatch(clearOrders());
  };
  handleClearBasket = () => {
    this.store.dispatch(clearBasketAction());
  };

}
