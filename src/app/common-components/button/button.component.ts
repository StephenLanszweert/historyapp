import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() backgroundColor: string;
  @Input() text: string;
  @Output() btnClicked: EventEmitter<string> = new EventEmitter<string>();
  public showIcon: boolean;

  constructor() { }

  ngOnInit() {
    this.showIcon = true;
  }

  change() {
    this.showIcon = !this.showIcon;
  }

  buttonClicked() {
    this.btnClicked.emit(this.text);
  }

}
