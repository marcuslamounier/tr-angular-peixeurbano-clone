import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { DealsService } from '../deals.service';

import { Deal } from '../shared/deals.model';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styles: [
    
  ],
  providers: [
    DealsService
  ]
})
export class DealComponent implements OnInit, OnDestroy {
  
  public deal: Deal

  constructor(
    private route: ActivatedRoute,
    private dealsService: DealsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (parameters: Params) => {
        this.dealsService
        .getDealsById(parameters.id)
        .subscribe(
          (data: Deal[]) => (
            this.deal = data.shift()
          )
        )
      }
    )
  }

  ngOnDestroy(): void {
    
  }

  public addCartItem(deal: Deal): void {
    this.cartService.addItem(this.deal)
  }

}
