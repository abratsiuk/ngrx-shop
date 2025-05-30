import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {MainComponent} from './layout/main/main.component';
import {LogoSvgComponent} from './layout/logo-svg/logo-svg.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CatalogItemComponent} from './pages/catalog-item/catalog-item.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {BasketComponent} from './pages/basket/basket.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DevelopComponent} from './pages/develop/develop.component';
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FundsStoreModule} from './store/funds/funds-store.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LogoSvgComponent,
    CatalogComponent,
    CatalogItemComponent,
    OrdersComponent,
    BasketComponent,
    ProfileComponent,
    DevelopComponent,
    OrderDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FundsStoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
