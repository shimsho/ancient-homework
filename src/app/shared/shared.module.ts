import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './buttons/button.component';
import { AddButtonComponent } from './buttons/add-button.component';
import { ThemeButtonComponent } from './buttons/theme-button.component';
import { PostComponent } from './post/post.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextFieldComponent } from './input/textfield.component';
import { BookmarkButtonComponent } from './buttons';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    AddButtonComponent,
    BookmarkButtonComponent,
    PostComponent,
    TextFieldComponent,
    ThemeButtonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    InputComponent,
    TextFieldComponent,
    ButtonComponent,
    AddButtonComponent,
    BookmarkButtonComponent,
    PostComponent,
    ThemeButtonComponent,
  ],
})
export class SharedModule {}
