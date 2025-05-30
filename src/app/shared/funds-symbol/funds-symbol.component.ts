import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../../store/IRootState';
import {selectFunds} from '../../store/funds/funds.selectors';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-funds-symbol',
  templateUrl: './funds-symbol.component.html',
  styleUrls: ['./funds-symbol.component.scss']
})
export class FundsSymbolComponent implements OnInit, OnDestroy {
  funds: number;
  fundsSub!: Subscription;

  constructor(private store: Store<IRootState>) {
    this.funds = 0;
  }

  ngOnInit(): void {
    const funds$ = this.store.pipe(select(selectFunds));
    this.fundsSub = funds$.subscribe((value) => {
      this.funds = value;
    });
  }

  ngOnDestroy(): void {
    this.fundsSub.unsubscribe();
  }


}
