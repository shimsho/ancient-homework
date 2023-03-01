import { Component, EventEmitter, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
})
export class AddButtonComponent {
  faPlus = faPlus;
  formEnabled: boolean = false;

  @Output() toggle = new EventEmitter<boolean>();

  toggleForm() {
    this.formEnabled = !this.formEnabled;
    this.toggle.emit(this.formEnabled);
  }
}
