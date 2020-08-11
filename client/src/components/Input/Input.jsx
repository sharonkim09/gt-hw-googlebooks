import React from "react";
// import "./style.css"
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
          <button 
          className="btn btn-dark right"
          id="searchbtn"
          onClick={props.handleFormSubmit}>
            Search
            </button>
        </form>
      </div>
    </>
  );
};

export default Input;
