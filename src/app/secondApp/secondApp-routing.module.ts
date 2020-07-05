import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecondAppComponent } from './secondApp.component';

const routes: Routes = [
  {
      path: '', component: SecondAppComponent,
  },
];

const myComponents = [
  SecondAppComponent
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
export class SecondAppRoutingModule { }
