import axios from "axios";

export default {
  getBooks: function () {
    return axios.get("/api/books");
  },
  getBook: function (id) {
    return axios.get("/api/books" + id);
  },
  getGoogleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
