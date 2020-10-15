import React from 'react'

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

export default Book;