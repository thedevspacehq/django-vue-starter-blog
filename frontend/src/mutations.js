import gql from "graphql-tag";

export const USER_SIGNUP = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
      }
    }
  }
`;

export const USER_SIGNIN = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      user {
        id
        username
        firstName
        lastName
        email
        bio
        website
      }
    }
  }
`;

export const SUBMIT_COMMENT = gql`
  mutation ($content: String!, $userID: ID!, $postID: ID!) {
    createComment(content: $content, userId: $userID, postId: $postID) {
      comment {
        content
      }
    }
  }
`;

export const UPDATE_POST_LIKE = gql`
  mutation ($postID: ID!, $userID: ID!) {
    updatePostLike(postId: $postID, userId: $userID) {
      post {
        title
        likes {
          id
        }
      }
    }
  }
`;
