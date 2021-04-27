
import React ,{Component} from 'react'
import ShelfChanger from './shelfChanger'

class  EvryBook extends Component {
  
     
         
    render(){
        const { book ,onChangeShelf,allBookss } = this.props;
        const searchForShelf = (book) =>{
         const shelfAbookFind = [...allBookss].filter(b => b.id === book.id);
            if(shelfAbookFind.length > 0){
                return shelfAbookFind[0].shelf;
            } else{
                return 'none'
            }
    
          }
         
      const  change = (event)=>{
            onChangeShelf(this.props.book , event.target.value)
               } 
               const shelf = 'shelf' in book ? book.shelf : searchForShelf(book)
               
      
        
       
       
        
            
               return (
                  
                   <li>
                   <div className="book">
                       <div className="book-top">
                           <div className="book-cover" style={{
                               width: 128, height: 174, backgroundImage: `url(${book.imageLinks
                                       ? book.imageLinks.thumbnail
                                       : ""
                                   })`
                           }}></div>
                          <ShelfChanger onChangeShelf={change}  shelf={shelf} />
       
                       </div>
                       <div className="book-title">{book.title}</div>
                       <div className="book-authors"> {book.authors}</div>
                   </div>
                   </li>
               )
           }
    }
  
  

export default EvryBook;