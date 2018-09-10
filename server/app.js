const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://test:spartasa12@ds151012.mlab.com:51012/gql-ninja');
mongoose.connection.once('open',()=>{
    console.log('connected to database')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listeninig for requsets from port 4000')
});