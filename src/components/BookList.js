import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext.js'
import BookDetails from '../components/BookDetails'

const BookList = () => {
    const {books} = useContext(BookContext)

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return <BookDetails book={book} key={book.id}/>
                })}
            </ul>
        </div>
        
    ) : (<p className="empty">No books available</p>)
}

export default BookList