import { Injectable } from '@angular/core'
import { CartItem } from './shared/cart-item.model'
import { Deal } from './shared/deals.model'

@Injectable()
export class CartService {
    public cartItems: CartItem[] = []

    public getCartItems(): CartItem[] {
        return this.cartItems
    }

    public addItem(deal: Deal): void {
        let cartItem: CartItem = new CartItem(
            deal.id,
            deal.imagens[0],
            deal.titulo,
            deal.descricao_oferta,
            deal.valor,
            1
        )

        let foundCartItem = this.cartItems.find(
            (item: CartItem) => (item.idDeal === cartItem.idDeal)
        )

        if (foundCartItem) {
            foundCartItem.quantity ++
        }
        else {
            this.cartItems.push(cartItem)
        }
        
    }

    public getCartTotalValue(): number {
        let totalValue = 0

        this.cartItems.forEach(
            item => {
                totalValue += (item.dealValue * item.quantity)
            }
        );
        return totalValue
    }

    public increaseItem(item: CartItem): void {
        let foundCartItem = this.cartItems.find(
            (cartItem: CartItem) => (cartItem.idDeal === item.idDeal)
        )

        if (foundCartItem) {
            foundCartItem.quantity ++
        }
    }

    public decreaseItem(item: CartItem): void {
        let foundCartItem = this.cartItems.find(
            (cartItem: CartItem) => (cartItem.idDeal === item.idDeal)
        )

        if (foundCartItem) {

            foundCartItem.quantity --

            if (foundCartItem.quantity === 0) {
                this.cartItems.splice(this.cartItems.indexOf(foundCartItem), 1)
                console.log(this.cartItems)
            }
        }
    }

    public cleanCart(): void {
        this.cartItems = []
    }

}


