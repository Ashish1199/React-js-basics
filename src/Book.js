import React from 'react'

const Book = ({img,title,author})  => {

    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.event)
        alert('Hello world')
    };

    const complexExample = (author) =>{
        console.log(author)
    };
    return (
        <article className='book' onMouseOver={()=>{
            console.log()
        }}>
            <img src={img} alt="book" />
            <h3>{title}</h3>
            <h5>{author}</h5>
            <button type="button" onClick={clickHandler}>Reference Example</button>
            <button type="button" onClick={ ()=> complexExample(author)}>Complex event</button>
        </article>
    );
}


export default Book
