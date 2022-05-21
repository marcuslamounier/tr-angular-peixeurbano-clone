import { CartItem } from './cart-item.model';

export class Order {
    constructor(
        public address: string,
        public num: string,
        public complement: string,
        public paymentMethod: string,
        public cartItems: CartItem[]
    ){}
}