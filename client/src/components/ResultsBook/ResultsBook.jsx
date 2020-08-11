import React from "react";
import "./style.css";
const ResultsBook = (props) => {
  return (
    <div id="resultsContainer">
      <div className="card">
        <div className="row">
          <div className="col l12 s12">
            <a className="right btn" href={props.link}id="viewBtn">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
            <button
              className="right btn btn-dark"
              id={props.id}
              onClick={() =>
                props.saveBook(
                  props.title,
                  props.authors,
                  props.description,
                  props.image,
                  props.link
                )
              }
            >
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </button>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <div className="card-image">
              <img
                alt="book"
                className="card.img"
                src={props.thumbnail}
                style={{ width: "200px" }}
                id="bookImg"
              />
            </div>
            <p id="descriptionEl">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultsBook;
