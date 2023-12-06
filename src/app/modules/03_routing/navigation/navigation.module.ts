import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route01Component } from './route01/route01.component';
import { Route02Component } from './route02/route02.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, children: [
    { path: 'route01', component: Route01Component },
    { path: 'route02', component: Route02Component },
    { path: '', redirectTo: 'route01', pathMatch: 'full' }
  ]}
]

@NgModule({
  declarations: [
    Route01Component,
    Route02Component,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavigationModule { }
