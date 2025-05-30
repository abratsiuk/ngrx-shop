import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CatalogItemComponent} from './pages/catalog-item/catalog-item.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {BasketComponent} from './pages/basket/basket.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DevelopComponent} from './pages/develop/develop.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';


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
export class AppRoutingModule {
}
