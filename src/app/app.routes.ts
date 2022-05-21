import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { FunComponent } from './fun/fun.component'
import { DealComponent } from './deal/deal.component'
import { HowToUseComponent } from './deal/how-to-use/how-to-use.component'
import { WhereComponent } from './deal/where/where.component'
import { BuyOrderComponent } from './buy-order/buy-order.component'

export const ROUTES: Routes = [
    { path : '', component: HomeComponent},
    { path : 'restaurants', component: RestaurantComponent},
    { path : 'fun', component: FunComponent},
    { path : 'deal', component: HomeComponent},
    { path : 'deal/:id', component: DealComponent,
        children: [
            { path: '', component: HowToUseComponent },
            { path: 'how-to-use', component: HowToUseComponent },
            { path: 'where', component: WhereComponent }
        ]
    },
    { path: 'buy-order', component: BuyOrderComponent}
]


