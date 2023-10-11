import { useSuspenseQuery } from "@apollo/client";
//import { useQuery } from '@apollo/client';
const GET_GRAPHQL = (query) => {
    const { data }  = useSuspenseQuery(query)
    return data
}

export default GET_GRAPHQL