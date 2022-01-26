import { gql } from "@apollo/client";

export const ADD_USER=gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
  token
  user{
    username
  }
    }
  }
  `
export const LOGIN=gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
  `

  export const SAVEBOOK=gql`
  mutation saveBook($BookInput: BookData!) {
    saveBook(BookData: $BookInput) {
      username
    }
  }
  `
  export const DELETEBOOK=gql `
  mutation removeBook ($bookId: String!) {
    removeBook (bookId: $bookId) {
      username
    }
  }
  `
