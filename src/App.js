
import React from 'react'
import {Route} from 'react-router-dom'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './listBooks'
import MainSearch from './mainSearchFile'

class BooksApp extends React.Component {
  state = {
   allBooks: []
  }
  // here to get books that in api and componentDidMount to render data just once
  componentDidMount = () => {
    BooksAPI.getAll().then(books =>{
      this.setState({ allBooks: books});
    }).then(()=>{
      console.log(this.state.allBooks)
    })   
  }
  // here function to update shelf
 changeShelf = (book, nShelf) =>{
   BooksAPI.update(book, nShelf);
   book.shelf = nShelf;
   // here filter all books to return books whit new shelf
   const bookss =[...this.state.allBooks].filter(b => b.id !== book.id).concat(book);
   this.setState({allBooks : bookss});


 }

  render() {
    return (
      <div className="app">
        
      <Route exact path="/">
      <ListBook allBooks = {this.state.allBooks}  onChangeShelf= {this.changeShelf} />
      </Route>
      <Route path="/search">
      <MainSearch  allBooks = {this.state.allBooks}    onChangeShelf= {this.changeShelf} />
      </Route>
         
        
      </div>
      
    )
  }
}

export default BooksApp
