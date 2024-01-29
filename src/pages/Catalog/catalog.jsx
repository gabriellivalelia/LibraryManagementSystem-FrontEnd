import React from "react";
import {
  PageWrapper,
  BooksWrapper,
  BookCard,
  FiltersAndAddButtonWrapper,
  SearchBarWrapper,
  SearchBarInput,
  SearchBarImage,
  Select,
  Option,
  Image,
  BookDescription,
  CustomModal,
} from "./styles";

import { Books, Genres } from "./exempleBook";
import { useState } from "react";

export default function Catalog() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.StrictMode>
      <PageWrapper>
        <CustomModal
          open={open}
          onCancel={handleCancel}
          centered="true"
          footer={null}
        ></CustomModal>
        <FiltersAndAddButtonWrapper>
          <SearchBarWrapper>
            <SearchBarInput placeholder="Busque por título ou autor..." />
            <SearchBarImage>
              <i className="material-icons">search</i>
            </SearchBarImage>
          </SearchBarWrapper>
          <Select>
            <Option>Todos os gêneros</Option>
            {Genres.map((genre) => (
              <Option key={genre} value={genre}>
                {genre}
              </Option>
            ))}
          </Select>
        </FiltersAndAddButtonWrapper>
        <BooksWrapper>
          {Books.map((book) => (
            <>
              <BookCard key={book.id} onClick={showModal}>
                <Image src={book.media_base64} />
                <BookDescription>
                  {book.title}, de {book.author}
                </BookDescription>
              </BookCard>
            </>
          ))}
        </BooksWrapper>
      </PageWrapper>
    </React.StrictMode>
  );
}
