import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './calculator-equivalent.component.html',
  styleUrls: ['./calculator-equivalent.component.scss']
})
export class CalculatorEquivalentComponent implements OnInit {

  public total_p1: number;
  public total_p2: number;
  public nota_p1: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) 
  {

  }

  ngOnInit() {
  }

  public goTo(url: string){
    this.router.navigate([url], { relativeTo: this.route });
  }

}

