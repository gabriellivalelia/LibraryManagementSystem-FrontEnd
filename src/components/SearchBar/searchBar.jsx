import { SearchBarWrapper, SearchBarInput, SearchBarImage } from "./styles";

export default function SearchBar(props) {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder={props?.placeholder} />
      <SearchBarImage>
        <i className="material-icons">search</i>
      </SearchBarImage>
    </SearchBarWrapper>
  );
}
