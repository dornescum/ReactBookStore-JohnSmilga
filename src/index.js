import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';

import {books} from "./books";
import Book from './Book'

// setup vars
// const firstBook = {
//     img:"https://m.media-amazon.com/images/I/41TJxOmPRjL._SY346_.jpg",
//     title: 'Me: Elton John Official Autobiography',
//     author: 'Elton John'
// };
// const secondBook = {
//     img:"https://m.media-amazon.com/images/I/41AIWIWFOIL.jpg",
//     title: 'Freddie Mercury: A Life, In His Own Words',
//     author: 'Greg Brooks'
// };

// const author = 'Elton John';
// const title = 'Me: Elton John Official Autobiography';
// const img ="https://m.media-amazon.com/images/I/41TJxOmPRjL._SY346_.jpg";
function BookList() {
    return (
        <section className='booklist'>{books.map((book) => {
            // const{img, title, author} = book;
            return <Book key={book.id} {...book}></Book>
        })}
            {/*<Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>*/}
            {/*</Book>*/}
            {/*<Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>*/}
        </section>
    )
};



ReactDom.render(<BookList/>, document.getElementById('root'));