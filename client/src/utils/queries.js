import {gql} from "@apollo/client";

export const ME = gql`
query me {
    me {
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`