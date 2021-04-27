
import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import EvryBook from './evryBook'


class MainSearch extends Component{
    state = {
     allBooksSearch: []
    }
   
// here to sent a user input  to a search function in a BookApi to get a search book
    searchBooks = (event)=>{
       BooksAPI.search(event.target.value.trim()).then((books) =>{
           if ((typeof books === 'undefined') || "error" in books || ''){
            this.setState( prevState =>({
                allBooksSearch: []
            }))
           } 
           else{
            this.setState( prevState =>({
                allBooksSearch: books
            }))
           }
        
       })
    }
    
    
    
    render(){
        const { onChangeShelf, allBooks } =this.props;    
    
        return(
            
            <div className="search-books">
<div className="search-books-bar">
    <Link to= '/'>
    <button className="close-search">Close</button>
    </Link>
  
  <div className="search-books-input-wrapper">
   
    <input type="text" onChange={this.searchBooks} placeholder="Search by title or author"/>
    

  </div>
</div>

<div className="search-books-results">
  <ol className="books-grid">
      
      { this.state.allBooksSearch.map(book =>
         <EvryBook key={book.id}  book={book} allBookss={allBooks} books={this.state.allBooksSearch}  onChangeShelf={onChangeShelf} />)}
  </ol>
</div>
</div>
        )
    }
}

export default MainSearch;