import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import {CatalogItemComponent} from './catalog-item/catalog-item.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {BasketComponent} from './basket/basket.component';
import {ProfileComponent} from './profile/profile.component';
import {DevelopComponent} from './develop/develop.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: CatalogItemComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/:id', component: OrderDetailComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'develop', component: DevelopComponent},
  {path: '*', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
