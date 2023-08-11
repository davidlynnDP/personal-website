import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeparatorComponent } from './components/line-separator/line-separator.component';



@NgModule({
  declarations: [
    LineSeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineSeparatorComponent
  ]
})
export class SharedModule { }
