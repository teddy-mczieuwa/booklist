import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const addBookHandler = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_BOOK', book: {title, author}})
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={addBookHandler}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" required/>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author" required/>
            <input type="submit" value="Add Book"/>
        </form>
    )
}

export default BookForm