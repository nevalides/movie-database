import { useContext } from "react";
import { SearchContext } from "../store/search-context";

export const useQuery = () => useContext(SearchContext);
