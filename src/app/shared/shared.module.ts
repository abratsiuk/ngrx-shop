import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FundsSymbolComponent} from './funds-symbol/funds-symbol.component';
import {FundsSvgComponent} from './funds-svg/funds-svg.component';
import {BasketAddComponent} from './basket-add/basket-add.component';


@NgModule({
  declarations: [FundsSymbolComponent, FundsSvgComponent, BasketAddComponent],
  exports: [
    FundsSymbolComponent, BasketAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
