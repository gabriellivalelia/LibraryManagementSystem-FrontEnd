import { SearchBarWrapper, SearchBarInput, SearchBarImage } from "./styles";

export default function SearchBar({ onChange, placeholder }) {
  const handleChange = (event) => {
    const value = event.target.value;

    onChange(
      value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  };

  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder={placeholder} onChange={handleChange} />
      <SearchBarImage>
        <i className="material-icons">search</i>
      </SearchBarImage>
    </SearchBarWrapper>
  );
}
