import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
