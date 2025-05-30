import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FundsSymbolComponent} from './funds-symbol/funds-symbol.component';
import {FundsSvgComponent} from './funds-svg/funds-svg.component';


@NgModule({
  declarations: [FundsSymbolComponent, FundsSvgComponent],
  exports: [
    FundsSymbolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
