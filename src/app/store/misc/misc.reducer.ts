import { createReducer, on } from '@ngrx/store';
import { loadTheme, toggleTheme } from './misc.actions';
import { MiscStore } from 'src/app/gql/misc.interface';

export const initialState = {
  theme: false,
};

export const miscReducer = createReducer(
  initialState,
  on(loadTheme, (state: MiscStore) => {
    const localTheme = localStorage.getItem('theme') === 'false';

    if (localTheme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    return {
      ...state,
      theme: localTheme,
    };
  }),
  on(toggleTheme, (state: MiscStore) => {
    if (!state.theme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    localStorage.setItem('theme', String(state.theme));

    return {
      ...state,
      theme: !state.theme,
    };
  })
);
