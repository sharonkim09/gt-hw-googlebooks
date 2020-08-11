import React from "react";
import "./style.css";
const Input = (props) => {
  return (
    <>
      <div className="container" id="formSection">
        <form>
          <input 
          type="text"
          placeholder="Search for a book"
          name="search" 
          value={props.search}
          onChange={props.handleInputChange}
          id="inputEl" />
          <span><button 
          className="btn btn-dark right"
          id="searchbtn"
          onClick={props.handleFormSubmit}>
            Search
            </button></span>
        </form>
      </div>
    </>
  );
};

export default Input;
