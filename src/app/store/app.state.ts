export interface AppState {
  posts: {
    liked: string[];
    removed: string[];
  };
  misc: {
    theme: boolean;
  };
}

export interface Post {
  id: string;
  title: string;
  description: string;
  updated: boolean;
  time: number;
}
