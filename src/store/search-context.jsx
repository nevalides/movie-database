import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  searchQuery: "",
  changeQuery: () => {},
});

export default function SearchContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const ctxValue = {
    searchQuery: searchQuery,
    changeQuery: handleChange,
  };

  return (
    <SearchContext.Provider value={ctxValue}>{children}</SearchContext.Provider>
  );
}
