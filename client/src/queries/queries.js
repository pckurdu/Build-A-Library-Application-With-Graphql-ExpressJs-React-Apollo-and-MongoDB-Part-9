//query for gql module
import {gql} from 'apollo-boost';


//authors list query
const getAuthorsQuery=gql`
{
    authors{
        id
        name
    }
}
`;

//book list query
const getBooksQuery=gql `

{
    books{
        name
        type
        id
    }
}
`;
//creating mutation to add books
const addBookMutation=gql`

    mutation{
    addBook(name:"",
        type:"",
        authorId:"")
        {
            id
            name
        }
    }

`;

//export query name
export {getAuthorsQuery,getBooksQuery,addBookMutation};
