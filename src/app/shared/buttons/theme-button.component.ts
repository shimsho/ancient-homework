import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { toggleTheme, loadTheme } from '../../store/misc/misc.actions';
import { MiscStore, MiscStoreWrapper } from 'src/app/gql/misc.interface';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
})
export class ThemeButtonComponent implements OnInit {
  misc$?: Observable<MiscStore>;
  theme = false;

  constructor(private store: Store<MiscStoreWrapper>) {}

  toggle() {
    this.store.dispatch(toggleTheme());
  }

  ngOnInit() {
    this.store.dispatch(loadTheme());

    this.misc$ = this.store.select((store) => store.misc);
    this.misc$.subscribe((misc) => {
      this.theme = misc.theme;
    });
  }
}
