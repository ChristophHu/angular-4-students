import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaticallyComponent } from './programatically.component';
import { Proute01Component } from './proute01/proute01.component';
import { Proute02Component } from './proute02/proute02.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProgramaticallyComponent, children: [
    { path: 'proute01', component: Proute01Component },
    { path: 'proute02', component: Proute02Component },
    { path: '', redirectTo: 'proute01', pathMatch: 'full' }
  ]}
]

@NgModule({
  declarations: [
    ProgramaticallyComponent,
    Proute01Component,
    Proute02Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProgramaticallyModule { }
