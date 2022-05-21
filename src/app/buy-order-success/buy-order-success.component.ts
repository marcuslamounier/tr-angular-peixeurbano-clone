import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-order-success',
  templateUrl: './buy-order-success.component.html',
  styles: [
  ]
})
export class BuyOrderSuccessComponent implements OnInit {

  @Input('idBuyOrder') public idBuyOrder: number

  constructor() { }

  ngOnInit(): void {
  }

}
