import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public buttonLabel = '';
  public buttonBg = '';

  @Input()
  set label(name: string) {
    this.buttonLabel = name;
  }

  @Input()
  set bg(color: string) {
    this.buttonBg = color;
  }
}
