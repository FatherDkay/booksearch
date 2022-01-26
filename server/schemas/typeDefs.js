const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  
input BookData{
  authors: [String!]
  description: String!
  title: String!
  bookId: String!
  image: String
}

  type Mutation {
    login(email: String!, password: String!): Auth
    saveBook(BookData: BookData!): User
    removeBook(bookId: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
