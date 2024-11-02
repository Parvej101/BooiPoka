import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../addToDB/addToDB';


const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData()
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const {bookId:currentBookId, image, author, review, bookName, category, tags, totalPages, rating, publisher, yearOfPublishing} = book

    const handleToMarkAsRead = (id) =>{

        addToStoredReadList(id)
    }
    const handleaddToStoredWishList = (id) =>{
            addToStoredWishList(id)
    }

    
    return (
        <div>
            <h1>Book Details :{currentBookId} </h1>
            <div className="hero-content grid grid-cols-2">
               <div className='bg-gray-300 py-10 rounded-lg'> <figure>
                    <img
                    className='w-2/3 mx-auto'
                        src={image}
                        alt="Movie" />
                </figure></div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p><span>Review :</span>{review}</p>
                    <p>Tag :<span className='text-green-300'> {tags}</span ></p>
                    <hr />
                    <p><span>Number of Pages :</span>{totalPages}</p>
                    <p><span>Publisher :</span>{publisher}</p>
                    <p><span>Year of Publishing :</span>{yearOfPublishing}</p>
                    <p><span>Rating :</span>{rating}</p>
                    <div className="card-actions ">
                        <button onClick={()=> handleToMarkAsRead(currentBookId)} className="btn">Read</button>
                        <button onClick={()=> addToStoredWishList(currentBookId)} className="btn bg-sky-300">WishList</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetail;