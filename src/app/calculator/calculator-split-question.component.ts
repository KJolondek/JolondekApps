import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './calculator-split-question.component.html',
  styleUrls: ['./calculator-split-question.component.scss']
})
export class CalculatorSplitQuestionComponent implements OnInit {

  public total_questao: number;
  public qtd_alternativas: number;
  public qtd_alternativas_certas: number;

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

