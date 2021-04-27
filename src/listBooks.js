import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import BookShelf from './bookShelf'
class ListBook extends Component{
    render(){
      const {allBooks, onChangeShelf} = this.props;
      console.log(allBooks)
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           < BookShelf  shelfName= 'curntly Reading' shelf = "currentlyReading" books={allBooks} onChangeShelf={onChangeShelf} />
           < BookShelf  shelfName= 'want to Read' shelf = 'wantToRead' books={allBooks} onChangeShelf={onChangeShelf} />
           < BookShelf  shelfName= ' finished' shelf = 'read' books={allBooks} onChangeShelf={onChangeShelf} />
            <div className="open-search">
                <Link to='/search'> 
                <button >Add a book</button>
                </Link>
             
            </div>
          </div>
        )
    }
}
export default ListBook;