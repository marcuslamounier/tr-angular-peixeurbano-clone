import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DealsService } from '../../deals.service';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styles: [
  ],
  providers: [
    DealsService
  ]
})
export class WhereComponent implements OnInit {
  
  public where: string = ''

  constructor(
    private route: ActivatedRoute,
    private dealsService: DealsService
  ) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe(
      (parameters: Params) => {
        this.dealsService
        .getWhereById(this.route.parent.snapshot.params['id'])
        .subscribe(
          (data: any) => (
            this.where = data.shift().descricao
          )
        )
      }
    )


  }

}
