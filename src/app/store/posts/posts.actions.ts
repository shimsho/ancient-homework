import { createAction, props } from '@ngrx/store';
import { Post } from '../app.state';

export const addPost = createAction('[Posts] Add', props<Post>());
export const likePost = createAction('[Posts] Like', props<{ id: string }>());
export const removePost = createAction(
  '[Posts] Remove',
  props<{ id: string }>()
);
export const fetchPosts = createAction('[Posts] Fetch Posts');
export const filterBookmarks = createAction('[Posts] Filter Bookmarks');
