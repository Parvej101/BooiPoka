import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { bookName, author, image, review, category, tags, rating, bookId } = book
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className='bg-gray-400 py-8 rounded-2xl'>
          <img
            className='h-[166px]'
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
          <div className='flex justify-center gap-4'>
            {
              tags.map((tag, index) => <button 
              key={index}
              className='border py-2 px-4 rounded-2xl bg-green-200'>{tag}</button>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By {author}</p>
          <div className='border-t-2 border-dashed'></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;