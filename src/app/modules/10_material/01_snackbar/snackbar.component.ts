import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('NotificationMessage', 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
