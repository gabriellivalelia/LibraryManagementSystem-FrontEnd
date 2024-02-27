import instance from "./instance";

export const createUser = (user) => {
  const token = localStorage.getItem("token");

  instance.post("/createUser", user, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const updateUser = (user) => instance.put("/updateUser", user);
export const getUserById = (id) => instance.get(`/getUserById/${id}`);
export const logIn = (data) => instance.post("/logIn", data);
export const deleteUser = (id) => instance.delete(`/deleteUser/${id}`);

export const createBook = (book) => instance.post("/createBook", book);
export const getBooks = () => instance.get("/getBooks");
export const getBooksByGenre = (genre) =>
  instance.get(`/getBooksByGenre/${genre}`);
export const getBookById = (id) => instance.get(`/getBookById/${id}`);
export const getBooksGenres = () => instance.get("/getBooksGenres");

export const getRentalByClientId = (id) =>
  instance.get(`/getRentalByClientId/${id}`);
