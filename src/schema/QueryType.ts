import * as url from 'url';
import axios = require('axios')
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql'
import { categoriesResolver, CategoryType } from './categories'
import { TaskType, tasksResolver } from './tasks'

const QueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    categories: {
      name: 'Categories',
      description: 'Categories',
      resolve: categoriesResolver,
      type: new GraphQLList(CategoryType)
    },
    tasks: {
      name: 'Tasks',
      description: 'Tasks',
      resolve: tasksResolver,
      type: new GraphQLList(TaskType)
    }
  })
})

export default QueryType
