//import the necessary modules to create a component
import React,{Component} from 'react';

//query for gql module
//import {gql} from 'apollo-boost';

//for export
import {graphql,compose} from 'react-apollo';
//Access the queries file
import {getAuthorsQuery,addBookMutation} from '../queries/queries';




class AddBook extends Component{

    //component's initial function
    constructor(props){
        super(props);
        //saving book information
        this.state={
            name:'',
            type:'',
            authorId:''
        };
    }

    //for getting authors in props
    getAuthors(){
        //the datas is in the data object in props
        console.log(this.props);
        //result of compose
        var datas=this.props.getAuthorsQuery;

        //retrieval of data from mlab in progress
        if(datas.loading){
            return (<option disabled>Authors loading</option>)
        }else{//when data retrieval is complete
            return datas.authors.map(author=>{
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }

    }

    //to trigger on submit event
    sendForm(e){
        //turn off default settings
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        console.log(this.props);
        
        return(
            // We will create forms that will add books
            //The sendForm function is triggered.
            <form id="add-book" onSubmit={this.sendForm.bind(this)}>
                
                <div className="field">
                    <label>Book Name:</label>
                    {/* we are updating the name of the book with the value input. */}
                    <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Type:</label>
                    {/* we are updating the type of the book with the value input. */}
                    <input type="text" onChange={(e)=>this.setState({type:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Select Author:</label>
                    {/* we are updating the authorId of the book with the value input. */}
                    <select onChange={(e)=>this.setState({authorId:e.target.value})}>
                        <option >Authors</option>
                        {this.getAuthors()}
                    </select>
                </div>
                <button>Add</button>
            </form>
        )
    }
}

//Let's export with compose.
export default compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
    )
(AddBook);