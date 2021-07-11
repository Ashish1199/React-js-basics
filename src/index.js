import React from 'react';
import ReactDom from 'react-dom';

//CSS 
import './index.css';

//DATA
import {books} from './books.js'
import Book from './Book.js'

function BookList() { 
    return (
        <section className="book-list">{books.map((book)=>{
            return (
                <Book key={book.id} {...book} />
        );
        })}</section>
    )
}




ReactDom.render(<BookList/>,document.getElementById('root'));