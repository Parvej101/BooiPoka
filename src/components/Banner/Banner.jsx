import React from 'react';
import bannerImage from '/images/books.jpg' 
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-96 ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Book to freshen up 
      <br />your Bookshelf </h1>
      
      <button className="btn btn-primary mt-14">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;