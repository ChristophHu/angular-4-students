import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpDeferLoadingComponent } from './cmp-defer-loading/cmp-defer-loading.component';
import { SkeletonComponent } from './cmp-defer-loading/skeleton/skeleton.component';

@NgModule({
  declarations: [
    CmpDeferLoadingComponent
  ],
  imports: [
    CommonModule,
    SkeletonComponent
  ],
  exports: [
    CmpDeferLoadingComponent
  ]
})
export class UiModule { }
