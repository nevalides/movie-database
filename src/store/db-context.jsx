import { createContext } from "react";

export const DbContext = createContext({
  isLogin: false,
  favList: [],
  search: () => {},
  addItemToFav: () => {},
});
