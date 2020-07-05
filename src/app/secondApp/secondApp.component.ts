import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './secondApp.component.html',
  styleUrls: ['./secondApp.component.scss']
})
export class SecondAppComponent implements OnInit {

  public total_p1: number;
  public total_p2: number;
  public nota_p1: number;

  public total_questao: number;
  public qtd_alternativas: number;
  public qtd_alternativas_certas: number;

  constructor(
    private router: Router,
  ) 
  {

  }

  ngOnInit() {
  }

}

