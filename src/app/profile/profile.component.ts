import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {clearFundsAction, decreaseFundsAction, increaseFundsAction} from '../store/funds/funds.actions';
import {selectFunds} from '../store/funds/funds.selectors';
import {Observable, Subscription} from 'rxjs';
import {IRootState} from '../store/IRootState';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fundsStep = 1000;
  funds: number;
  funds$!: Observable<number>;
  fundsSub!: Subscription;

  constructor(private store: Store<IRootState>) {
    this.funds = 0;
  }

  ngOnInit(): void {
    this.funds$ = this.store.pipe(select(selectFunds));
    this.fundsSub = this.funds$.subscribe((value) => {
      this.funds = value;
    });
  }

  handleClearFunds = () => {
    this.store.dispatch(clearFundsAction());
  }

  handleDecreaseFunds = () => {
    this.store.dispatch(decreaseFundsAction(
      {payload: this.fundsStep}));
  }
  handleIncreaseFunds = () => {
    this.store.dispatch(increaseFundsAction({payload: this.fundsStep}));
  }

  handleClearOrders = () => {
    // this.store.dispatch(clearOrders());
  }
  handleClearBasket = () => {
    // this.store.dispatch(clearBasket());
  }

}
