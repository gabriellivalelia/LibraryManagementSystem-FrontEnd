import { SearchBarWrapper, SearchBarInput, SearchBarImage } from "./styles";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder="Busque por título ou autor..." />
      <SearchBarImage>
        <i className="material-icons">search</i>
      </SearchBarImage>
    </SearchBarWrapper>
  );
}
