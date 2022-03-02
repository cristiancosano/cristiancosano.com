import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit, OnChanges {
  @Input() outline = false;
  @Input() icon: string | undefined = undefined;
  public classes = ['btn'];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkButtonType();
  }

  ngOnInit(): void {
    this.checkButtonType();
  }

  checkButtonType(){
    this.classes = this.classes.filter(value =>  value != 'outline' && value != 'filled');
    if(this.outline) this.classes.push('outline');
    else this.classes.push('filled');
  }


}
