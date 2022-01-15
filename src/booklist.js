import React from 'react';
import { books } from './data/books';
import Book from './components/bookComponent';

//css
import '../src/css/style.css';


const Booklist = () => {
    return (
       <section className="booklist">
          {books.map(  (book) => {
                return <Book key={book.id} book={book}></Book>
            })}
       </section>
    );
} 





export default Booklist;
