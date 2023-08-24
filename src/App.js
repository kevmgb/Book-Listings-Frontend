import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookListing from './components/BookListing';

const books = [
  {
    "name": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "year": 1865
  },
  {
    "name": "Through the Looking-Glass",
    "author": "Lewis Carroll",
    "year": 1871
  }
]
function App() {
  return (
    <div>
      <Header />
      <BookListing books={books}/>
    </div>
  );
}

export default App;
