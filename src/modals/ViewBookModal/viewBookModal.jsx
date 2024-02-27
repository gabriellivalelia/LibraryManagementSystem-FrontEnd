import { useEffect, useState } from "react";
import * as EndPoints from "../../services/api/endPoints";

export default function ViewBookModal(props) {
  const [book, setBook] = useState();

  async function getBook() {
    if (props.bookId) {
      const res = await EndPoints.getBookById(props.bookId);
      setBook(res.data);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  return <p>{book?.title}</p>;
}
