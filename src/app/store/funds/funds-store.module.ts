import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {fundsReducerFunction} from './funds.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('funds', fundsReducerFunction),
  ]
})
export class FundsStoreModule {
}
