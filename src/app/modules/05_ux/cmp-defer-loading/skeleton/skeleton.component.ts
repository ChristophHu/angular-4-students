import { Component, Input } from '@angular/core';

@Component({
  selector: 'skeleton',
  standalone: true,
  imports: [],
  template: `
    <div class="h-24 bg-gray-50 shadow-lg rounded">
      <div class="h-full" [class.shimmer]="animate"></div>
    </div>
  `,
  styleUrls: ['./skeleton.component.sass']
})
export class SkeletonComponent {
  @Input() animate = false
}
