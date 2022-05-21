import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { ReducedDescription } from './util/reduced-description.pipe';

import { ROUTES } from './app.routes'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun.component';
import { DealComponent } from './deal/deal.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhereComponent } from './deal/where/where.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HowToUseComponent } from './deal/how-to-use/how-to-use.component';
import { BuyOrderSuccessComponent } from './buy-order-success/buy-order-success.component'

import { CartService } from './cart.service'

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FunComponent,
    RestaurantComponent,
    DealComponent,
    HowToUseComponent,
    WhereComponent,
    ReducedDescription,
    BuyOrderComponent,
    BuyOrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CartService,
    { provide: LOCALE_ID, useValue: 'pt-Br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
