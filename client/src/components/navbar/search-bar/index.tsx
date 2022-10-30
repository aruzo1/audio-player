import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import HStack from "components/h-stack";
import SearchIcon from "./search-icon";
import { SearchBarButton, SearchBarInput } from "./style";

function SearchBar() {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  function termHandler(e: FormEvent<HTMLInputElement>) {
    setTerm(e.currentTarget.value);
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  }

  return (
    <HStack as="form" align="initial" onSubmit={submitHandler}>
      <SearchBarInput
        value={term}
        onChange={termHandler}
        placeholder="Search..."
      />

      <SearchBarButton
        variant="brand"
        onClick={submitHandler}
        disabled={Boolean(!term)}
      >
        <SearchIcon />
      </SearchBarButton>
    </HStack>
  );
}

export default SearchBar;
