import React, { Component } from "react";
import API from "../utils/API";
import SaveBooks from "../components/List/SaveBooks";
class Saved extends Component {
  state = {
    books: [],
  };
  // like document.ready() will run after window is ready
  componentDidMount() {
    this.loadBooks();
  }
// retrieve saved book data
  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };
  // delete book by their id
  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };
// rendering all books saved
  render() {
    return (
      <>
        <div>
          {this.state.books.map((book) => (
            <SaveBooks
              key={book._id}
              id={book._id}
              link={book.link}
              title={book.title}
              author={book.author}
              description={book.description}
              thumbnail={book.thumbnail}
              onClick={this.deleteBook}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Saved;
