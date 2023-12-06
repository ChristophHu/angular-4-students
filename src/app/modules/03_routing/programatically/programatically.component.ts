import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programatically',
  templateUrl: './programatically.component.html',
  styleUrls: ['./programatically.component.sass']
})
export class ProgramaticallyComponent {

  constructor(private _router: Router) {}

  navigateToPRoute01() {
    this._router.navigate(['/programatically', 'proute01'])
  }
  navigateToPRoute02() {
    let route: string = 'proute02'
    this._router.navigate(['/', 'programatically', route])
  }
}
