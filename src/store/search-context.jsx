import { createContext, useCallback, useState } from "react";

const SearchContext = createContext({
  searchQuery: {
    query: null
  },
  changeQuery: () => { },
});

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    query: null
  });

  const handleChange = useCallback((query) => {
    setSearchQuery((prevQuery) => ({
      ...prevQuery,
      ...query
    }));
  }, []);

  const ctxValue = {
    searchQuery: searchQuery,
    changeQuery: handleChange,
  };

  return (
    <SearchContext.Provider value={ctxValue}>{children}</SearchContext.Provider>
  );
}

export { SearchContext, SearchContextProvider }