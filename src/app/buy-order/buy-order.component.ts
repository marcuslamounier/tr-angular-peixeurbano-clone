import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuyOrderService } from '../buy-order.service';
import { CartService } from '../cart.service';
import { CartItem } from '../shared/cart-item.model';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styles: [],
  styleUrls: [
    './buy-order.component.css'
  ],
  providers: [
    BuyOrderService
  ],
  encapsulation: ViewEncapsulation.None
})
export class BuyOrderComponent implements OnInit {

  public formOrder: FormGroup = new FormGroup({
    'address': new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120)
    ]),
    'num': new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]),
    'complement': new FormControl(null, [
      Validators.maxLength(120)
    ]),
    'paymentMethod': new FormControl(null, [
      Validators.required
    ])
  })
  
  public idBuyOrder: number
  public cartItems: CartItem[]
  public cartTotalValue: number

  constructor(
    private buyOrderService: BuyOrderService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
  }

  public confirmOrder(): void {

    if (this.formOrder.status === 'INVALID'){
      for (let control in this.formOrder.controls){
        this.formOrder.get(control).markAsTouched()
      }
    }
    else {

      if(this.cartService.getCartItems().length === 0){
        alert('Você não selecionou nenhum item')
      }
      else {
        this.buyOrderService.concludeOrder(
          new Order(
            this.formOrder.value.address,
            this.formOrder.value.num,
            this.formOrder.value.complement,
            this.formOrder.value.paymentMethod,
            this.cartService.getCartItems()
          )
        )
        .subscribe(
          (idBuyOrder: number) => {
            this.idBuyOrder = idBuyOrder
            this.cartService.cleanCart()
        })
      }

    }
    
  }

  public increaseCartItem(item: CartItem): void {
    this.cartService.increaseItem(item)
  }

  public decreaseCartItem(item: CartItem): void {
    this.cartService.decreaseItem(item)
  }

}
