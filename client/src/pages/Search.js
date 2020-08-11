import React, { Component } from "react";
import Input from "../components/Input/Input";

import ResultsBook from "../components/ResultsBook/ResultsBook";
class Search extends Component {
  state = {
    search: "",
    books: [],
  };

  render() {
    return (
      <>
        <Input />
        <ResultsBook />
      </>
    );
  }
}

export default Search;
