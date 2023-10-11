//import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useQuery } from '@apollo/client';
const GET_GRAPHQL = (query) => {
    const { data }  = useQuery(query)
    return data
}

export default GET_GRAPHQL