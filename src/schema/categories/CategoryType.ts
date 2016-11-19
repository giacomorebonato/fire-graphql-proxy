import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
const parentCategoryResolver = require('./parentCategoryResolver')

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category type',
  fields: () => ({
    uid: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    parentCategory_uid: {
      type: GraphQLID
    },
    parentCategory: {
      resolve: parentCategoryResolver,
      type: CategoryType
    }
  })
})

module.exports = CategoryType
