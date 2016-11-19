import QueryType from './QueryType'
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

export default new GraphQLSchema({
  query: QueryType
})
