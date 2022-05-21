import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from './shared/order.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { URL_API } from './app.api';

@Injectable()
export class BuyOrderService {

    constructor(private http: HttpClient){}

    public concludeOrder(order: Order): Observable<number> {

        return (this.http.post(
            `${URL_API}pedidos/`,
            JSON.stringify(order),
            { headers: new HttpHeaders().append('Content-type', 'application/json') }
        )
        .map(
            (response: any) => response.id
        ))
    }
    
}