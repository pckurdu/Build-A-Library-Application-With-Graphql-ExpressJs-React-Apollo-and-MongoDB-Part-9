import React from 'react';
//import BookList
import BookList from './components/BookList';

//import AddBook
import AddBook from './components/AddBook';

//use create client
import ApolloClient from 'apollo-boost';
//use create provider
import {ApolloProvider} from 'react-apollo';

//Accessing the address for graphql queries
const client=new ApolloClient({
  uri:'http://localhost:4000/graphql'
});

//main component
function App() {
  return (
    // Using provider with client
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello React</h1>
        <BookList/>
        {/* for adding BookList */}
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
