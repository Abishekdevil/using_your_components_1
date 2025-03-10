import React from "react";


function BookCard({ name, genre, author, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <h2>{name}</h2>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default BookCard;
