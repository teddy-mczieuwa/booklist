import React, {createContext, useReducer, useEffect} from 'react'
import {v4 as uuid4} from 'uuid'

export const BookContext = createContext()

const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {title: action.book.title, author: action.book.author, id: uuid4()}]
    
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)

        default:
            return state
    }
}

const BookListProvider = props => {
    const [books, dispatch] = useReducer(bookReducer,[], () => {
        let localBooks = window.localStorage.getItem('books')
        return localBooks ? JSON.parse(localBooks) : []
    })

    useEffect(() => {
        window.localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookListProvider