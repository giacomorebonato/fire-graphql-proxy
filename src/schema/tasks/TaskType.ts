import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLBoolean
} from 'graphql'
import categoryResolver from './categoryResolver'
import { CategoryType } from '../categories'

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'Task type',
  fields: () => ({
    uid: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    category_uid: {
      type: GraphQLString
    },
    category: {
      type: CategoryType,
      resolve: categoryResolver
    }
  })
})

module.exports = TaskType
