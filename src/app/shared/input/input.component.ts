import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
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
