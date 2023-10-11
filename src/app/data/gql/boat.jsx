import { gql } from '@apollo/client'

 const GET_BOATS = gql`
  query Boats {
    boats(first: 10) {
        data {
        boat
        description
        id
        image
        }
    }
}
  `


export default GET_BOATS