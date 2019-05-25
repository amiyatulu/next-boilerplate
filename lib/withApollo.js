import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache }  from 'apollo-boost'
import { endpoint, prodEndpoint } from '../config';

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    cache: new InMemoryCache().restore(initialState || {})
  })
))