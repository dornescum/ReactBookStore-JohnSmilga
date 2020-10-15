import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
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
}

const Book = ({img, title, author}) => {
    // const title = 'Me: Elton John Official Autobiography';
    // const {img, title, author} = props;
    // console.log(props);
    // atribute, event handler
    // onclick, onMouseOver

    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert ('hello world')
    };
    const complexExample = (author) => {
console.log(author)
    };
    return (
        <article className='book' onMouseOver={() =>{
            console.log(title)
        }}>
            <img
                src={img}
                alt=""/>
            <h1 onClick={()=>console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>reference example</button>
            <button type='button' onClick={() => complexExample(author)}>more comlex example</button>
        </article>

    )
};

ReactDom.render(<BookList/>, document.getElementById('root'));