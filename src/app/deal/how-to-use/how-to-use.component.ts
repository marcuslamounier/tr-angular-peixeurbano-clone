import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DealsService } from '../../deals.service';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styles: [
  ],
  providers: [
    DealsService
  ]
})
export class HowToUseComponent implements OnInit {
  
  public howToUse: string = ''

  constructor(
    private route: ActivatedRoute,
    private dealsService: DealsService
  ) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe(
      (parameters: Params) => {
        this.dealsService
        .getHowToUseById(this.route.parent.snapshot.params['id'])
        .subscribe(
          (data: any) => (
            this.howToUse = data.shift().descricao
          )
        )
      }
    )

  }

}
