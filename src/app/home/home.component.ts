import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service'
import { Deal } from '../shared/deals.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
  providers: [
    DealsService
  ]
})
export class HomeComponent implements OnInit {

  public deals: Deal[]

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {

    this.dealsService.getDeals()
    .subscribe(
      (data: Deal[]) => {
        this.deals = data
      }
    )
  }

}
