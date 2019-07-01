
//We use to produce express.
const express=require('express');
//for express-graphql packages
const graphqlHTTP=require('express-graphql');
//We are creating applications using express.
const app=express();
//create page where graphql will run

//import cors
const cors=require('cors');

//import schema.js
const schema=require('./schema/schema');

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true //graphiql installation
}));



//for mongoose packages
const mongoose=require('mongoose');

//generated user information is used.
mongoose.connect('mongodb://pc:pckurdu1.@ds139037.mlab.com:39037/pckurdu', {useNewUrlParser: true});

//Connecting with mLab.
mongoose.connection.once('open',()=>{
    console.log('mLab conncetion success');
})

//Listen 4000. port for request.
app.listen(4000,()=>{
    console.log('listening port 4000');
    
});