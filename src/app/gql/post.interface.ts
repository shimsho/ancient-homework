export interface Post {
  id: string;
  title: string;
  body: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };
}

export interface PostsStore {
  liked: string[];
  removed: string[];
  new: Post[];
  filterBookmarks: boolean;
}

export interface PostsStoreWrapped {
  posts: {
    liked: string[];
    removed: string[];
    new: Post[];
    filterBookmarks: boolean;
  };
}
