export class CartItem {
    constructor(
        public idDeal: number,
        public dealImage: object,
        public dealTitle: string,
        public dealDescription: string,
        public dealValue: number,
        public quantity: number 
    ){}
}