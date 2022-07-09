import BookList from "./components/BookList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="App">
      <Header setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;
