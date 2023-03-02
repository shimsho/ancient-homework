import { createReducer, on } from '@ngrx/store';
import {
  addPost,
  removePost,
  likePost,
  filterBookmarks,
} from './posts.actions';
import { Post } from 'src/app/gql/post.interface';

export const initialState = {
  removed: [],
  liked: [],
  new: [],
  filterBookmarks: false,
};

export const postReducer = createReducer(
  initialState,
  on(likePost, (state: any, action: any) => {
    return {
      ...state,
      liked: [...state.liked, action['0']],
    };
  }),
  //outdated local-state addPost
  on(addPost, (state: any, action: any) => {
    return {
      ...state,
      new: [
        ...state.new,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          time: action.time,
          updated: action.updated,
        },
      ],
    };
  }),
  on(removePost, (state: any, action: any) => {
    return state.filter((k: Post) => k.id !== action.id);
  }),
  on(filterBookmarks, (state: any) => {
    return {
      ...state,
      filterBookmarks: !state.filterBookmarks,
    };
  })
);
