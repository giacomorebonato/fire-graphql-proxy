import express = require('express')
import Schema from './schema/Schema'
import bodyParser = require('body-parser')
import path = require('path')
const graphqlHTTP = require('express-graphql')
const app = express()

app.use(bodyParser.json())
app.use('/graphql', (req, res, next) => {
  req.requests = {}

  next()
})

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

const server = app.listen(process.env['PORT'] || 3000, () => {
  console.log(` 🚀 🚀 🚀  Server running on PORT ${server.address().port}`)
})
