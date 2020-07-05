import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorEquivalentComponent } from './calculator-equivalent.component';
import { CalculatorSplitQuestionComponent } from './calculator-split-question.component';

const routes: Routes = [
  { path: '', redirectTo: 'equivalent' },
  { path: 'equivalent', component: CalculatorEquivalentComponent, },
  { path: 'split-question', component: CalculatorSplitQuestionComponent, },
];

const myComponents = [
  CalculatorSplitQuestionComponent,
  CalculatorEquivalentComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
],
exports: [
  RouterModule
],
declarations: [
  myComponents
],
entryComponents: [
  myComponents,
]
})
export class CalculatorRoutingModule { }
