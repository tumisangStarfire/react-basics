import React from 'react';
import BookImage from './bookImageComponent'
import Title from './titleComponent';
import Author from './authorComponent';

const Book = (props) => { 
    const {id,title, img_src,author_names} = props.book; 

   /*  const buttonBuy = (id : int) =>{
        console.log(id);
    } */
    const buttonBuy = (e) =>{
        console.log(e);
    }
    return <article className='book'>
        <BookImage img_src ={img_src}></BookImage>
        <Title  title= { title }></Title>
        <Author author_names = { author_names }></Author>
        <button type="button" onClick={ buttonBuy }>Buy</button>
    </article>
}

export default Book;
