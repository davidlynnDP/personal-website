import { Component, Input } from '@angular/core';

@Component({
  selector: 'line-separator-custom',
  templateUrl: './line-separator.component.html',
  styleUrls: ['./line-separator.component.css']
})
export class LineSeparatorComponent {

  @Input()
  public isDownShadow: boolean = false;

}
