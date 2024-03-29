import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BindingModule } from './modules/01_binding/binding.module';
import { UiModule } from './modules/05_ux/ux.module';
import { MaterialModule } from './modules/10_material/ux.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,

    BindingModule,
    UiModule,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
