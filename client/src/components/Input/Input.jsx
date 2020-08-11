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
          value=""
          onChange=""
          id="inputEl" />
          <button 
          className="btn btn-dark right"
          id="searchbtn"
          onClick="">
            Search
            </button>
        </form>
      </div>
    </>
  );
};

export default Input;
