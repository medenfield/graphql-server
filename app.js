const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://admin:changeme@ds139960.mlab.com:39960/gql-test');
mongoose.connection.once('open', () => {
  console.log('connected to database');
})
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening to requests on port 4000');
})
