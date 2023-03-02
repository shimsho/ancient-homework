import { Component, Input, OnInit } from '@angular/core';
import { faPen, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';

import { likePost } from 'src/app/store/posts/posts.actions';
import { editPost, removePost } from 'src/app/gql/post.graphql';
import { PostsStore, PostsStoreWrapped } from 'src/app/gql/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  posts$?: Observable<PostsStore>;
  posts: any;
  @Input() props: any;

  liked = false;
  editing = false;
  loading = false;
  faPen = faPen;
  faHeart = faHeart;

  title = '';
  body = '';

  constructor(
    private toast: HotToastService,
    private apollo: Apollo,
    private store: Store<PostsStoreWrapped>
  ) {}

  ngOnInit(): void {
    this.title = this.props.title;
    this.body = this.props.description;

    //Initialize Posts Store
    this.posts$ = this.store.select((store) => store.posts);
    this.posts$.subscribe((posts) => {
      this.posts = posts;
    });
  }

  likePost() {
    this.liked = true;
    this.store.dispatch(likePost(this.props.id));
  }

  handleChange(e: any, location: string) {
    if (location === 'title') this.title = e.target.value;
    else this.body = e.target.value;
  }

  startEditing(): any {
    if (this.editing) {
      //No Edits Made
      if (this.title === this.props.title) {
        this.editing = false;
        return this.toast.info('No changes made', {
          position: 'bottom-center',
        });
      }

      //Max Title 64 Characters
      if (this.title.length > 64) {
        return this.toast.error('Title over 64 characters', {
          position: 'bottom-center',
        });
      }

      //Max Body 256 Characters
      if (this.body.length > 256) {
        return this.toast.error('Title over 64 characters', {
          position: 'bottom-center',
        });
      }

      //updatePost Mutation
      this.apollo
        .mutate({
          mutation: editPost,
          variables: {
            id: this.props.id,
            title: this.title,
            body: this.body,
          },
        })
        .subscribe({
          next: (result: any) => {
            if (result.data.updatePost) {
              return this.toast.success('Successfully added Post!', {
                position: 'bottom-center',
              });
            }

            return this.toast.error('Unknown Error', {
              position: 'bottom-center',
            });
          },
          error: (error) => {
            return this.toast.error(error, {
              position: 'bottom-center',
            });
          },
        });
    }

    this.editing = !this.editing;
  }

  removePost(): any {
    //Invalid Id
    if (this.props.id <= 0) {
      return this.toast.success('Successfully removed Post!', {
        position: 'bottom-center',
      });
    }

    this.apollo
      .mutate({
        mutation: removePost,
        variables: {
          id: this.props.id,
        },
      })
      .subscribe({
        next: (result: any) => {
          if (result.data.deletePost) {
            return this.toast.success('Successfully removed Post!', {
              position: 'bottom-center',
            });
          }

          return this.toast.error('Unknown Error', {
            position: 'bottom-center',
          });
        },
        error: (error) => {
          return this.toast.error(error, {
            position: 'bottom-center',
          });
        },
      });
  }
}
