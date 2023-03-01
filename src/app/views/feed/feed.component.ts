import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { getPosts } from '../../gql/post.graphql';
import { Post, PostsStore, PostsStoreWrapped } from '../../gql/post.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit, OnDestroy {
  liked?: string[];
  filteredBookmarks?: boolean;
  posts$?: Observable<PostsStore>;
  postsData?: Observable<Post[]>;

  private querySubscription?: Subscription;

  pageIndex = 1;

  constructor(
    private apollo: Apollo,
    private store: Store<PostsStoreWrapped>
  ) {}

  ngOnInit() {
    this.postsData = this.apollo
      .watchQuery<Document>({
        query: getPosts,
      })
      .valueChanges.pipe(
        map(({ data }: { data: any }) =>
          this.filteredBookmarks
            ? data.posts.data.filter((post: Post) =>
                this.liked?.includes(post.id)
              )
            : data.posts.data
        )
      );

    this.posts$ = this.store.select((store) => store.posts);
    this.posts$.subscribe((posts) => {
      this.filteredBookmarks = posts.filterBookmarks;
      this.liked = posts.liked;
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
