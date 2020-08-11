import React, { Component } from "react";
import Input from "../components/Input/Input";

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
  };

  render() {
    return (
      <>
        <Input 
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}/>
        <ResultsBook />
      </>
    );
  }
}

export default Search;
