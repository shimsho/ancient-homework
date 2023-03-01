import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent {
  public inputLabel = '';

  @Input()
  set label(name: string) {
    this.inputLabel = name;
  }

  @Output() field = new EventEmitter<{ data: string; label: string }>();

  handleChange(event: Event) {
    this.field.emit({
      data: (event.target as HTMLInputElement).value,
      label: this.inputLabel,
    });
  }
}
