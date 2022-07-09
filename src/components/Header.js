import React from 'react'
import axios from 'axios'

function Header({setBooks}) {
    const [search, setSearch] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&orderBy=newest&maxResults=35`)
        .then(function (response) {
            setBooks(response.data.items)
            console.log(response.data.items)
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  return (
    <header className='header'>
        <h1>Book Search</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search for a book" />
        </form>
    </header>
  )
}

export default Header