import { FormEvent, useState } from "react";
import HStack from "components/h-stack";
import SearchIcon from "./search-icon";
import { SearchBarButton, SearchBarInput } from "./style";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [term, setTerm] = useState("");

  function termHandler(e: FormEvent<HTMLInputElement>) {
    setTerm(e.currentTarget.value);
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    router.push(`/search?term=${term}`);
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
