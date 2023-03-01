import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { FeedComponent } from './views/feed/feed.component';

import { StoreModule } from '@ngrx/store';
import { miscReducer } from './store/misc/misc.reducer';
import { postReducer } from './store/posts/posts.reducer';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AppComponent, FeedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ misc: miscReducer, posts: postReducer }),
    GraphQLModule,
    HttpClientModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
