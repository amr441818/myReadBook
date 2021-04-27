
import React from  'react'
import EvryBook from './evryBook'

const BookShelf = props => {
    const  {shelfName, shelf, books ,onChangeShelf} = props;
    // here to filter evry shelf to the suitabl shelf book
    const evryBookShelf = books.filter(book => book.shelf === shelf)
    console.log(shelf);
        
    return(
        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

              { evryBookShelf.map(bo => <EvryBook book= {bo} key={bo.id}    onChangeShelf={onChangeShelf} /> )}
               
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BookShelf;