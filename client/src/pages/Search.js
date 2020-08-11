import React, { Component } from "react";
import Input from "../components/Input/Input";
import API from "../utils/API";
import ResultsBook from "../components/ResultsBook/ResultsBook";

class Search extends Component {
  state = {
    search: "",
    books: [],
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked button");
    this.getBooks();
  };
  getBooks = () => {
    API.getGoogleBooks(this.state.search)
      .then((res) => {
        console.log(res.data.items);
        this.setState({
          books: res.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  saveBook = (title, author, description, thumbnail, link) => {
    //event.preventDefault();
    API.saveBook({
      title: title,
      author: author,
      description: description,
      thumbnail: thumbnail,
      link: link
    })
      .then(this.setState({message:alert("This book has been saved!")}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Input
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.books.map((book, i) => {
          return (
            <ResultsBook
              key={book.id}
              thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              author={book.volumeInfo.authors}
              link={book.volumeInfo.infoLink}
              saveBook={this.saveBook}
            />
          );
        })}
      </>
    );
  }
}

export default Search;
