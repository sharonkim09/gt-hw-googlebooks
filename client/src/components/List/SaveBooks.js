import React from "react";
import "./style.css";
const SaveBooks = (props) => {
  return (
    <div id="savedBooksContainer">
      <div className="card">
        <div className="row">
          <div className="col l12 s12">
            <div className="buttons">
              <a className="btn right" target="_blank" href={props.link}><i className="fa fa-eye " aria-hidden="true"></i></a>
              {props.button ? (
                <button
                  onClick={() =>
                    props.onClick(
                      props.title,
                      props.author,
                      props.description,
                      props.thumbnail,
                      props.link
                    )
                  }
                  type="button"
                >
                  Save
                </button>
              ) : (
                <button
                  className="right btn"
                  onClick={() => props.onClick(props.id)}
                  type="button"
                  id="deleteBtn"
                >
               <i className="fa fa-window-close" aria-hidden="true"></i>
                </button>
              )}
              <h3>{props.title}</h3>
              <h5>Written by: {props.author}</h5>
              <div className="card-image">
                <img
                  alt="book"
                  src={props.thumbnail}
                  className="card.img"
                  style={{ width: "200px" }}
                />
                <p id="descriptionEl">
                {props.description}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaveBooks;
