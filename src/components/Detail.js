import React from 'react'

function Detail({book, setShowDetail}) {
  return (
    <div className='detail'>
        <div className='book-detail'>
            <button onClick={() => setShowDetail(false)}>
                X
            </button>
            <img src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png"} alt={book.volumeInfo.title} />
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <a href={book.volumeInfo.previewLink} target="_blank" >Preview Link</a>
            <span>Publisher: {book.volumeInfo.publisher}</span>
            <span>Language: {book.volumeInfo.language}</span>
            <span>Page Count: {book.volumeInfo.pageCount}</span>

        </div>
    </div>
  )
}

export default Detail