import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { addPost } from '../../gql/post.graphql';

import { HotToastService } from '@ngneat/hot-toast';

interface FieldChange {
  data: string;
  label: string;
}

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  showForm = false;

  title = '';
  body = '';

  constructor(private toast: HotToastService, private apollo: Apollo) {}

  handleChange(data: FieldChange) {
    if (data.label === 'Title') this.title = data.data;
    else this.body = data.data;
  }

  toggleForm(toggled: boolean) {
    this.showForm = toggled;
  }

  addPost() {
    this.apollo
      .mutate({
        mutation: addPost,
        variables: {
          title: this.title,
          body: this.body,
        },
      })
      .subscribe({
        next: (result: any) => {
          if (result.data.createPost) {
            return this.toast.success('Successfully Posted!', {
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
