import React, { useState, useEffect } from "react";
import * as EndPoints from "../../services/api/endPoints";

export default function WaitingBookModal(props) {
  const [book, setBook] = useState({});

  async function getBook() {
    try {
      const res = await EndPoints.getBookById(props.bookId);
      setBook(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    getBook();
  });

  return (
    <React.StrictMode>
      <h1>{book?.title}</h1>
    </React.StrictMode>
  );
}
