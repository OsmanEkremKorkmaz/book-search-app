import React, { useState } from 'react'
import Detail from './Detail';

function Book({book}) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className='book' onClick={() => setShowDetail(true)}>
        <img src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png"} alt={book.volumeInfo.title} />
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors}</p>
      </div>
      {showDetail && <Detail setShowDetail={setShowDetail} book={book} />}
    </>
  )
}

export default Book