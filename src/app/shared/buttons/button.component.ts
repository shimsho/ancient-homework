import { Component, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public buttonLabel = '';
  public buttonBg = '';
  faPen = faPen;
  faTrash = faTrash;

  responsiveStyle() {
    if (this.buttonLabel === 'Edit') return true;
    if (this.buttonLabel === 'Remove') return true;
    else return false;
  }

  @Input()
  set label(name: string) {
    this.buttonLabel = name;
  }

  @Input()
  set bg(color: string) {
    this.buttonBg = color;
  }
}
