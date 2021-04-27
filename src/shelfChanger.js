import React, {Component} from 'react'

class ShelfChanger extends Component{
    
render(){
    const {onChangeShelf , shelf} =this.props;
    console.log(shelf)
    return(
        <div className="book-shelf-changer">
        <select onChange={onChangeShelf} value={shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
    )
}

}
export default ShelfChanger;