import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service'
import { Deal } from '../shared/deals.model'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styles: [
  ],
  providers: [
    DealsService
  ]
})
export class RestaurantComponent implements OnInit {

  public deals: Deal[]

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.dealsService.getDealsByType("restaurante")
    .subscribe(
      (data: Deal[]) => (
        this.deals = data
      )
    )

  }

}
