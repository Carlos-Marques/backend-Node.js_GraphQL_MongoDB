const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlExpress = require("express-graphql");

const speakerSchema = require('./GraphQL/Schemas/SpeakerSchema').SpeakerSchema;

//connecting to mongodb
mongoose.connect('mongodb://mongo/myappdb',(err)=>{
    if (err) throw err;
    console.log("Connected to MongoDB");
})  

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), ()=> {
    console.log("Node app is running at localhost:" + app.get('port'))
});

//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: speakerSchema,
    rootValue: global,
    graphiql: true
}));

app.get('/', (req, res) => {

    res.send("hello world ! ")

})