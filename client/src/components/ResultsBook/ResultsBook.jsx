import React from "react";
import "./style.css";
const ResultsBook = (props) => {
  return (
    <div id="resultsContainer">
      <div className="card">
        <div className="row">
          <div className="col l12 s12">
            <a className="right btn" href="https://www.google.com" id="viewBtn">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
            <button
              className="right btn btn-dark"
              id=""
              onClick=""
            >
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </button>
            <h2>Title</h2>
            <h3>Author</h3>
            <div className="card-image">
              <img
                alt="book"
                className="card.img"
                src=""
                id="bookImg"
              />
            </div>
            <p id="descriptionEl">description</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultsBook;
