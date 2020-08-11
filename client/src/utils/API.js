import axios from "axios";

export default {
  // axios call to retrieve saved books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // axios call to retrieve books by id
  getBook: function (id) {
    return axios.get("/api/books" + id);
  },
  // axios call to google api
  getGoogleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // axios call to create book to save
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  // axios call to delete book
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
