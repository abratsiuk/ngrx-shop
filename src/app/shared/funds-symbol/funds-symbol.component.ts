import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IRootState} from '../../store/IRootState';
import {selectFunds} from '../../store/funds/funds.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-funds-symbol',
  templateUrl: './funds-symbol.component.html',
  styleUrls: ['./funds-symbol.component.scss']
})
export class FundsSymbolComponent implements OnInit {
  funds$!: Observable<number>;

  constructor(private store: Store<IRootState>) {
  }

  ngOnInit(): void {
    this.funds$ = this.store.pipe(select(selectFunds));
  }

}
