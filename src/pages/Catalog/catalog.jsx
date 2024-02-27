import {
  PageWrapper,
  BooksWrapper,
  BookCard,
  FiltersAndAddButtonWrapper,
  Select,
  Option,
  Image,
  BookDescription,
} from "./styles";
import { CustomModal } from "../../utils/commomStyles";
import { AddBookButton } from "./components";
import SearchBar from "../../components/SearchBar/searchBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as EndPoints from "../../services/api/endPoints";
import ViewBookModal from "../../modals/ViewBookModal/viewBookModal";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchBarInput, setSearchBarInput] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [open, setOpen] = useState(false);

  function showModal(id) {
    setSelectedBook(id);
    setOpen(true);
  }
  const handleCancel = () => {
    setOpen(false);
  };

  async function getBooks() {
    try {
      const resBooks = selectedGenre
        ? await EndPoints.getBooksByGenre(selectedGenre)
        : await EndPoints.getBooks();
      const resGenres = await EndPoints.getBooksGenres();

      setBooks(resBooks.data);
      setGenres(resGenres.data);
    } catch (error) {
      console.log(
        error?.response?.data?.message || "Erro interno no servidor."
      );
    }
  }

  function handleSelectedGenre(e) {
    setSelectedGenre(e.target.value);
  }

  useEffect(() => {
    getBooks();
  }, [selectedGenre]);

  return (
    <PageWrapper>
      <CustomModal
        open={open}
        onCancel={handleCancel}
        centered="true"
        footer={null}
        destroyOnClose
      >
        <ViewBookModal bookId={selectedBook} />
      </CustomModal>
      <FiltersAndAddButtonWrapper>
        <SearchBar
          placeholder="Busque por título ou autor..."
          onChange={(value) => setSearchBarInput(value)}
        />
        <Select onChange={(e) => handleSelectedGenre(e)}>
          <Option value="">Todos os gêneros</Option>
          {genres.map((genre) => (
            <Option key={genre} value={genre}>
              {genre}
            </Option>
          ))}
        </Select>
        <AddBookButton />
      </FiltersAndAddButtonWrapper>
      <BooksWrapper>
        {books
          ?.filter(
            (book) =>
              book.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(searchBarInput) ||
              book.author
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(searchBarInput)
          )
          .map((book) => (
            <>
              <BookCard key={book?.id} onClick={() => showModal(book?.id)}>
                <Image src={book?.media_base64} />
                <BookDescription>
                  {book?.title}, de {book?.author}
                </BookDescription>
              </BookCard>
            </>
          ))}
      </BooksWrapper>
    </PageWrapper>
  );
}
