//import to create component
import React,{Component} from 'react';

//query for gql module
//import {gql} from 'apollo-boost';

//for export
import {graphql} from 'react-apollo';

//Access the queries file
import {getBooksQuery} from '../queries/queries';

class BookList extends Component{
    getBooks(){
        //We access the books with the data object.
        var datas=this.props.data;

        //if books are gets from mlab
        if(datas.loading){
            return (<div>Books Loading</div>)
        }
        //when getting books is finished
        else{
            return datas.books.map(book=>{
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }
    render(){
        console.log(this.props);
        
        return(
            <div>
                <ul id="book-list">
                    {/* use getBooks function */}
                    {this.getBooks()}
                </ul>
            </div>
        )
    }
}
//export graphql
export default  graphql(getBooksQuery) (BookList);