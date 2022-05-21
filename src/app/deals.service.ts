import { Injectable } from '@angular/core';
import { Deal } from './shared/deals.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { URL_API } from './app.api';

@Injectable()
export class DealsService {
    
    constructor(private http: HttpClient){}

    public getDeals(): Observable<Deal[]> {
        return this.http.get(`${URL_API}ofertas?destaque=true`)
        .retry(10)
        .map((response: any) => response)
    }

    public getDealsByType(category: string): Observable<Deal[]> {
        return this.http.get(`${URL_API}ofertas?categoria=${category}`)
        .retry(10)
        .map((response: any) => response)
    }

    public getDealsById(id: number): Observable<Deal[]> {
        return this.http.get(`${URL_API}ofertas?id=${id}`)
        .retry(10)
        .map((response: any) => response)
    }

    public getHowToUseById(id: number): Observable<string> {
        return this.http.get(`${URL_API}como-usar?id=${id}`)
        .retry(10)
        .map((response: any) => response)
    }

    public getWhereById(id: number): Observable<string> {
        return this.http.get(`${URL_API}onde-fica?id=${id}`)
        .retry(10)
        .map((response: any) => response)
    }
    
    public searchDeals(term: string): Observable<Deal[]> {
        return this.http.get(`${URL_API}ofertas?descricao_oferta_like=${term}`)
        .retry(10)
        .map((response: any) => response)
    }

}