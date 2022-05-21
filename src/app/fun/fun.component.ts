import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service'
import { Deal } from '../shared/deals.model'

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styles: [
  ],
  providers: [
    DealsService
  ]
})
export class FunComponent implements OnInit {

  public deals: Deal[]

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {

    this.dealsService.getDealsByType("diversao")
    .subscribe(
      (data: Deal[]) => (
        this.deals = data
      )
    )

  }

}
