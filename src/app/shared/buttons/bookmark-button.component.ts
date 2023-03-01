import { Component } from '@angular/core';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { filterBookmarks } from 'src/app/store/posts/posts.actions';
import { PostsStore } from 'src/app/gql/post.interface';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
})
export class BookmarkButtonComponent {
  faBookBookmark = faBookBookmark;

  constructor(private store: Store<PostsStore>) {}

  toggle() {
    this.store.dispatch(filterBookmarks());
  }
}
