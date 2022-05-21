import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import '../util/rxjs-extensions'

import { DealsService } from '../deals.service'
import { Deal } from '../shared/deals.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    'header.component.css'
  ],
  providers: [
    DealsService
  ]
})
export class HeaderComponent implements OnInit {

  public deals: Observable<Deal[]>
  public deals2: Deal[]
  private searchSubject: Subject<string> = new Subject<string>()

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.deals = this.searchSubject
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap(
        (searchTerm: string) => {
        if (searchTerm.trim() === '' || searchTerm.length < 3){
          return Observable.of<Deal[]>([])
        }
        return this.dealsService.searchDeals(searchTerm)
      }
    )
    .catch(
      (error: any) => {
        console.log(error)
        return Observable.of<Deal[]>([])
      }
    )
  }

  public search(searchTerm: string): void {
    this.searchSubject.next(searchTerm)
  }

  public cleanSearch(): void {
    this.searchSubject.next('')
  }

}
