import gql from 'graphql-tag';

export const getPosts = gql`
  query getPosts {
    posts {
      data {
        id
        title
        body
        user {
          id
          name
          username
          email
          phone
          website
        }
      }
    }
  }
`;

export const addPost = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export const editPost = gql`
  mutation editPost($id: ID!, $title: String, $body: String) {
    updatePost(id: $id, input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export const removePost = gql`
  mutation removePost($id: ID!) {
    deletePost(id: $id)
  }
`;
