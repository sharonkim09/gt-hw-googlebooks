import React, { Component } from "react";
import API from "../utils/API";
import SaveBooks from "../components/List/SaveBooks"
class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };
  deleteBook=id=>{
    API.deleteBook(id)
    .then(res=>this.loadBooks())
    .catch(err=>console.log(err))
  }

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
              authors={book.author}
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
